using Blog.Models.Core;
using Blog.Models.Post;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoriesPosts> CategoriesPosts { get; set; }
    }
}
