using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Namespace
{
    [Route("posts")]
    [ApiController]
    [EnableCors("AllowOrigin")] 
    public class PostController : ControllerBase
    {
        IPostService _postservice;
        public PostController(IPostService ips)
        {
            _postservice=ips;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Post>> Get()
        {
            return _postservice.GetPosts();
        }

        [HttpGet("{id}")]
        public ActionResult<Post> Get(int id)
        {
            return _postservice.GetPostByID(id);
        }

        [HttpPost]
        public void Post([FromBody] Post post)
        {
            _postservice.AddPost(post);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Post post)
        {
            _postservice.UpdatePost(id,post);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _postservice.DeletePost(id);
        }
    }
}