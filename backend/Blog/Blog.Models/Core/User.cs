
namespace Blog.Models.Core
{
    public class User
    {
        public User()
        {
            Active = true;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool Active { get; set; }
    }
}
