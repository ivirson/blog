using Blog.Models.Core;
using System;

namespace Blog.Models.Post
{
    public class Post
    {
        public Post()
        {
            Active = true;
            Date = DateTime.Now;
            Likes = 0;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }
        public DateTime Date { get; set; }
        public int Likes { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
    }
}
