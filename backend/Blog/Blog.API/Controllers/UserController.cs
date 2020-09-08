using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.API.Data;
using Blog.Models.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns a list of users of the Blog application
        /// </summary>
        /// <returns>List of users objects</returns>
        // GET: api/users
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.Where(x => x.Active).OrderBy(x => x.Name).ToListAsync();
        }

        /// <summary>
        /// Returns a user by id
        /// </summary>
        /// <param name="id">user id</param>
        /// <returns>User object</returns>
        // GET api/users/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null || !user.Active)
            {
                return NotFound();
            }

            return user;
        }

        /// <summary>
        /// Adds a user in the users list
        /// </summary>
        /// <param name="user">User that will be added in the list</param>
        /// <returns>Call the GetUser method</returns>
        // POST api/users
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        /// <summary>
        /// Update a user in the users list
        /// </summary>
        /// <param name="id">User id</param>
        /// <param name="user">User that will be updated in the users list</param>
        /// <returns></returns>
        // PUT api/users/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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
        /// Delete a user in the users list
        /// </summary>
        /// <param name="id">User id</param>
        /// <returns></returns>
        // DELETE api/users/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            user.Active = false;
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
