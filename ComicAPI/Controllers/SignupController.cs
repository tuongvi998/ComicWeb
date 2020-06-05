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
    [EnableCors("AllowOrigin")]  
    public class SignupController : ControllerBase
    {
         private IUserService _userService;
          public SignupController (IUserService userService)
        {
            _userService= userService;
        }
       
        [HttpPost]
        public void Post([FromBody] User user)
        {
            _userService.AddNewUser(user);
        }
        
       
    }
}