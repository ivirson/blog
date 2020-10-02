
using Blog.Models.Post;
using System.Collections.Generic;

namespace Blog.Models.Core
{
    public class User
    {
        public User()
        {
            Active = true;
            PostLikes = new List<PostLike>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<PostLike> PostLikes { get; set; }
        public string Role { get; set; }
        public string Image { get; set; }
        public bool Active { get; set; }
    }
}
