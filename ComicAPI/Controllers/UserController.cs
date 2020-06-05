using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ComicAPI.Services.UserService;
using ComicAPI.Models.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace ComicAPI.Controllers
{
    [Route("users")]
    [ApiController]
    [Authorize]
    [EnableCors("AllowOrigin")]  
    public class UserController : ControllerBase
    {
         private IUserService _userService;
          public UserController (IUserService userService)
        {
            _userService= userService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return  _userService.GetUsers();
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult<User> Get(int id)
        {
            return _userService.GetUserById(id);
        }
        [HttpGet("check/{username}/{password}")]
        public ActionResult<User> Get2(string username,string password)
        {
            
            return _userService.UserLogin(username,password);
        }       
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
            _userService.UpdateUser(id,user);
            
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userService.DeleteUser(id);
        }
        [HttpPatch("{id}")]
        public void Patch(int id,[FromBody] User user)
        {
            _userService.UpdateUser(id,user);
        }
    }
}