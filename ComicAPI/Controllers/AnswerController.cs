using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services.ComicServices;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
    [Route("answers")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        IAnswerService _ias;
        public AnswerController(IAnswerService ias)
        {
            _ias=ias;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Answer>> Get()
        {
            return _ias.GetAnswers();
        }

        [HttpGet("{id}")]
        public ActionResult<Answer> Get(int id)
        {
            return _ias.GetAnswerByID(id);
        }

        [HttpPost]
        public void Post([FromBody] Answer value)
        {
            _ias.AddAnswer(value);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Answer value)
        {
            _ias.UpdateAnswer(id,value);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _ias.DeleteAnswer(id);
        }
    }
}