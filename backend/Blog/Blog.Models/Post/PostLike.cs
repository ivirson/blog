using Blog.Models.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Models.Post
{
    public class PostLike
    {
        public int Id { get; set; }
        public Post Post { get; set; }
        public int PostId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
