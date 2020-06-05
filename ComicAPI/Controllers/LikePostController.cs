using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services.ComicServices;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
    [Route("likeposts")]
    [ApiController]
    public class LikePostController : ControllerBase
    {
        ILikePostService _ils;
        public LikePostController(ILikePostService ils)
        {
            _ils=ils;
        }
        [HttpGet]
        public ActionResult<IEnumerable<LikePost>> Get()
        {
            return _ils.GetLikes();
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] LikePost value)
        {
            _ils.AddLikePost(value);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _ils.UnLikePost(id);
        }
    }
}