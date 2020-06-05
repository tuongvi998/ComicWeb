using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ComicAPI.Controllers
{
   
    public class TokenController : ControllerBase
    {
        private const string SECRET_KEY="abcdefnvjfdkssdkfjsjfnjds";
        public static readonly SymmetricSecurityKey SIGNING_KEY= new SymmetricSecurityKey(Encoding.ASCII.GetBytes(TokenController.SECRET_KEY));

        [HttpGet]
        [Route("api/login/{random}")]
        public IActionResult Get(string random)
        {
                return new ObjectResult(GenerateToken(random));
           
        }

        private string GenerateToken(string username)
        {
            var token= new JwtSecurityToken(
                claims: new Claim[]
                {
                    new Claim(ClaimTypes.Name,username)
                },
                notBefore: new DateTimeOffset(DateTime.Now).DateTime,
                expires:new DateTimeOffset(DateTime.Now.AddMinutes(60)).DateTime,
                signingCredentials: new SigningCredentials(SIGNING_KEY,SecurityAlgorithms.HmacSha256)
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}