using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Services.ComicServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ComicAPI.Controllers
{
    [Route("genres")]
    [ApiController]
    [EnableCors("AllowOrigin")] 
    public class GenreController : ControllerBase
    {
        private IGenreService _genreservice;
        public GenreController(IGenreService genreService)
        {
            _genreservice=genreService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Genre>> Get()
        {
            return _genreservice.Genres() ;
        }

        [HttpGet("{id}")]
        public ActionResult<Genre> Get(int id)
        {
            return _genreservice.GetGenreByID(id);
        }

        [HttpPost]
        public void Post([FromBody] Genre genre)
        {
            _genreservice.AddGenre(genre);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Genre genre)
        {
            _genreservice.UpdateGenre(id,genre);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _genreservice.DeleteGenre(id);
        }
    }
}