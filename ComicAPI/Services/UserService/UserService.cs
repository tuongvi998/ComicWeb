using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.UserService
{
    public class UserService :IUserService
    {
       private DataContext _context;
        public UserService(DataContext context)
        {
            _context= context;
        }

        public void AddNewUser(User user)
        {
             _context.Users.Add(user);
            _context.SaveChanges();
           
        }

        public void DeleteUser(int id)
        {
             var user=_context.Users.FirstOrDefault(x=>x.ID==id);
            _context.Users.Remove(user);
             _context.SaveChanges();
          
        }

        public User GetUserById(int Id)
        {
            return _context.Users.Select(u=> new User{
                ID=u.ID,
                Username=u.Username,
                Password=u.Password,
                Image=u.Image,
                Email=u.Email,Role=u.Role,
                Posts=u.Posts.ToList(),
                Comment=u.Comment.Select(e=> new Comment
                {
                    ID = e.ID,
                   Content= e.Content,CommentTime=e.CommentTime,Comic= new Comic{ID=e.Comic.ID}
                }).ToList(),
                Likes=u.Likes.Select(e=> new Like{
                    ID=e.ID,
                    check=e.check,
                    ComicID=e.ComicID,
                    Comic=e.Comic,
                }).ToList(),
                
            }).Where(x=> x.ID==Id).SingleOrDefault();
          
        }

        public List<User> GetUsers()
        {      
            var users= new List<User>();
            users=_context.Users.ToList();
            return users;
          
        }

        public void UpdateUser(int id, User user)
        {
            var olduser=_context.Users.FirstOrDefault(x=>x.ID==id);
            olduser.Role=user.Role;
            _context.SaveChanges();
          
        }

        public User UserLogin(string Username,string Password)
        {
            return _context.Users.FirstOrDefault(x=> x.Username==Username && x.Password==Password);
          
        }
    }
}