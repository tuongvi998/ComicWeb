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
    [Route("chapters")]
    [ApiController]
    [EnableCors("AllowOrigin")]  
    public class ChaperController : ControllerBase
    {
        private IChapService _chapservice;
        public ChaperController(IChapService chap)
        {
            _chapservice=chap;
        }
        [HttpGet]// tat cac chap
        public ActionResult<IEnumerable<Chapter>> Get()
        {
            return _chapservice.GetChaps();
        }

        [HttpGet("{id}")] // chaps cua comic co id
        public ActionResult<IEnumerable<Chapter>> Get(int id)
        {
            return _chapservice.GetChapsofComic(id);
        }
        
        [HttpPost]  
        public void Post([FromBody] Chapter chapter)
        {
             _chapservice.AddChap(chapter);
        }

        [HttpPut("{id}")] //delete theo chapterID
        public void Put(int id, [FromBody] Chapter chapter)
        {
            _chapservice.UpdateChap(id,chapter);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _chapservice.DeleteChap(id);
        }
    }
}