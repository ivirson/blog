using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.API.Data;
using Blog.Models.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Blog.API.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly DataContext _context;

        public PostController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns a list of posts of the Blog application
        /// </summary>
        /// <returns>List of posts objects</returns>
        // GET: api/posts
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            var posts = await _context.Posts.Where(x => x.Active)
                .Include(x => x.User)
                .Include(x => x.Category)
                .OrderByDescending(x => x.Date).ToListAsync();

            return Ok(posts);
        }

        /// <summary>
        /// Returns a list of latest posts of the Blog application
        /// </summary>
        /// <param name="qty">posts quantity</param>
        /// <returns>List of posts objects</returns>
        // GET: api/posts/latest/5
        [HttpGet("latest/{qty}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Post>>> GetLatestPosts(int qty)
        {
            var posts = await _context.Posts.Where(x => x.Active)
                .Include(x => x.User)
                .Include(x => x.Category)
                .OrderByDescending(x => x.Date).Take(qty).ToListAsync();

            return posts;
        }

        /// <summary>
        /// Returns a list of 3 popular posts of the Blog application
        /// </summary>
        /// <param name="qty">posts quantity</param>
        /// <returns>List of posts objects</returns>
        // GET: api/posts/popular/5
        [HttpGet("popular/{qty}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Post>>> GetPopularPosts(int qty)
        {
            var posts = await _context.Posts.Where(x => x.Active)
                .Include(x => x.User)
                .Include(x => x.Category)
                .OrderByDescending(x => x.Likes.Count >= 0).Take(qty).ToListAsync();

            return posts;
        }

        /// <summary>
        /// Returns a post by id
        /// </summary>
        /// <param name="id">post id</param>
        /// <returns>Post object</returns>
        // GET api/posts/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null || !post.Active)
            {
                return NotFound();
            }

            return post;
        }

        /// <summary>
        /// Adds a post in the posts list
        /// </summary>
        /// <param name="post">Post that will be added in the list</param>
        /// <returns>Call the GetPost method</returns>
        // POST api/posts
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Post>> AddPost(Post post)
        {
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPost", new { id = post.Id }, post);
        }

        /// <summary>
        /// Update a post in the posts list
        /// </summary>
        /// <param name="id">Post id</param>
        /// <param name="post">Post that will be updated in the posts list</param>
        /// <returns></returns>
        // PUT api/posts/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutPost(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// Delete a post in the posts list
        /// </summary>
        /// <param name="id">Post id</param>
        /// <returns></returns>
        // DELETE api/posts/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Post>> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            post.Active = false;
            _context.Entry(post).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        /// <summary>
        /// Increment post likes qty
        /// </summary>
        /// <param name="id">post id</param>
        /// <param name="userId">authenticated user id</param>
        /// <returns>post after updating likes qty</returns>
        // PUT api/posts/like/2/3
        [HttpPut("like/{id}/{userId}")]
        [Authorize]
        public async Task<ActionResult<Post>> LikePost(int id, int userId)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            var hasPostLike = _context.PostLikes.Any(x => x.PostId == id && x.UserId == userId);
            if (hasPostLike)
            {
                return post;
            }

            var postLike = new PostLike
            {
                PostId = id,
                UserId = userId
            };

            _context.PostLikes.Add(postLike);
            await _context.SaveChangesAsync();

            return post;
        }

        /// <summary>
        /// Decrement post likes qty
        /// </summary>
        /// <param name="id">post id</param>
        /// <param name="userId">authenticated user id</param>
        /// <returns>post after updating likes qty</returns>
        // PUT api/posts/unlike/2/3
        [HttpPut("unlike/{id}/{userId}")]
        [Authorize]
        public async Task<ActionResult<Post>> UnlikePost(int id, int userId)
        {
            var post = await _context.Posts.FindAsync(id);
            var postLike = await _context.PostLikes.FirstOrDefaultAsync(x => x.PostId == id && x.UserId == userId);
            if (post == null || postLike == null)
            {
                return NotFound();
            }

            _context.PostLikes.Remove(postLike);
            await _context.SaveChangesAsync();

            return post;
        }

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }
    }
}
