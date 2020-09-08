using Blog.Models.Core;
using System;
using System.Collections.Generic;

namespace Blog.Models.Post
{
    public class Post
    {
        public Post()
        {
            Active = true;
            Date = DateTime.Now;
            Likes = new List<PostLike>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }
        public DateTime Date { get; set; }
        public List<PostLike> Likes { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
    }
}
