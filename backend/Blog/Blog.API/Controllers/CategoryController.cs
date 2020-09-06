using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.API.Data;
using Blog.Models.Post;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoryController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns a list of categories of the Blog application
        /// </summary>
        /// <returns>List of categories objects</returns>
        // GET: api/categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.Where(x => x.Active).OrderBy(x => x.Name).ToListAsync();
        }

        /// <summary>
        /// Returns a category by id
        /// </summary>
        /// <param name="id">category id</param>
        /// <returns>Category object</returns>
        // GET api/categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null || !category.Active)
            {
                return NotFound();
            }

            return category;
        }

        /// <summary>
        /// Adds a category in the categories list
        /// </summary>
        /// <param name="category">CAtegory that will be added in the list</param>
        /// <returns>Call the GetCategory method</returns>
        // POST api/categories
        [HttpPost]
        public async Task<ActionResult<Category>> AddCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        /// <summary>
        /// Update a category in the categories list
        /// </summary>
        /// <param name="id">Category id</param>
        /// <param name="category">Category that will be updated in the categories list</param>
        /// <returns></returns>
        // PUT api/categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
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
        /// Delete a category in the categories list
        /// </summary>
        /// <param name="id">Category id</param>
        /// <returns></returns>
        // DELETE api/categories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Category>> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            category.Active = false;
            _context.Entry(category).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
