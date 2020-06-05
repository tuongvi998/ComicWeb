using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.UserService
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUserById(int Id);
        void AddNewUser(User user);
        void UpdateUser(int id,User user);
        void DeleteUser(int id);
        User UserLogin(string username,string pass);
    }
}