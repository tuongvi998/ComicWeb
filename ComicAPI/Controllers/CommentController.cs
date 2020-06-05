using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services.ComicServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
   [Route("comments")]
    [ApiController]
    [EnableCors("AllowOrigin")]  
    public class CommentController : ControllerBase
    {
        ICommentService _ics;
        public CommentController(ICommentService ics)
        {
            _ics = ics;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Comment>> Get()
        {
            return _ics.GetComments();
        }
        
        [HttpGet("{id}")]
        public ActionResult<Comment> Get(int id)
        {
            return _ics.GetCommentById(id);
        }

        [HttpPost]
        public void Post([FromBody] Comment comment)
        {
            _ics.AddComment(comment);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Comment comment)
        {
            _ics.UpdateComment(id,comment);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _ics.DeleteComment(id);
        }
    }
}