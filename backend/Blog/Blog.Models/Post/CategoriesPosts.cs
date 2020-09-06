using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Models.Post
{
    public class CategoriesPosts
    {
        public int Id { get; set; }
        public Post Post { get; set; }
        public int PostId { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}
