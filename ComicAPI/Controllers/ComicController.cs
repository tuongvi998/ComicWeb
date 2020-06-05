using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services.ComicServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
    [Route("comics")]
    [ApiController]
    [EnableCors("AllowOrigin")]  
    public class ComicController : ControllerBase
    {
        private IComicService _comicService;
        public ComicController(IComicService comicService)
        {
            _comicService=comicService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Comic>> Get()
        {
            return _comicService.GetComics();
        }
       
        [HttpGet("{id}")]
        public ActionResult<Comic> Get(int id)
        {
            return _comicService.GetComicById(id);
        }
       [HttpGet]
       [Route("search/{keyword}")]
       public ActionResult<IEnumerable<Comic>> Search(string keyword)
        {
            return _comicService.SearchByName(keyword);
        }
        [HttpGet]
       [Route("comicHot")]
       public ActionResult<IEnumerable<Comic>> ComicHot()
        {
            return _comicService.ComicHot();
        }
         [HttpGet]
       [Route("comicFull")]
       public ActionResult<IEnumerable<Comic>> comicFull()
        {
            return _comicService.ComicFull();
        }
        [Route("comicUpdating")]
       public ActionResult<IEnumerable<Comic>> comicUpdating()
        {
            return _comicService.ComicUpdating();
        }
        [HttpGet]
       [Route("searchByGenre/{genreid}")]
       public ActionResult<IEnumerable<Comic>> SearchByGenre(int genreid)
        {
            return _comicService.SearchByGenre(genreid);
        }
        [HttpGet]
       [Route("Filter/{genreid}/{status}")]
       public ActionResult<IEnumerable<Comic>> Filter(int genreid,int status)
        {
            return _comicService.Filter(genreid,status);
        }
        [HttpPost]
        public void Post([FromBody] Comic comic)
        {
            _comicService.AddNewComic(comic);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Comic comic)
        {
            _comicService.UpdateComic(id,comic);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _comicService.DeleteComic(id);
        }
    }
}