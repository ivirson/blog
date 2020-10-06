using Blog.API.Data;
using Blog.Models.Post;
using Blog.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Blog.Repository
{
    public class PostsRepository
    {
        private readonly DataContext _context;

        public PostsRepository(DataContext context)
        {
            _context = context;
        }

        public PagedList<Post> GetPosts(QueryParameters parameters)
        {
            return PagedList<Post>.ToPagedList(_context.Posts.OrderByDescending(p => p.Date),
                parameters.PageNumber,
                parameters.PageSize);
        }
    }
}
