using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Models.Post
{
    public class Category
    {
        public Category()
        {
            Active = true;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public bool Active { get; set; }
    }
}
