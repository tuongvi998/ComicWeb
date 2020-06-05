using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
    [Route("likes")]
    [ApiController]
    [EnableCors("AllowOrigin")] 
    public class LikeController : ControllerBase
    {

        ILikeService _likeservice;
        public LikeController(ILikeService like)
        {
            _likeservice=like;
        }
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] Like like)
        {
            _likeservice.Like(like);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _likeservice.UnLike(id);
        }
    }
}