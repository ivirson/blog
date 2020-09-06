using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.API.Data;
using Blog.Models.Post;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            return await _context.Posts.Where(x => x.Active).OrderByDescending(x => x.Date).ToListAsync();
        }

        /// <summary>
        /// Returns a post by id
        /// </summary>
        /// <param name="id">post id</param>
        /// <returns>Post object</returns>
        // GET api/posts/5
        [HttpGet("{id}")]
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

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }
    }
}
