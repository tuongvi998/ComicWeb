using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Services.ComicServices
{
    public interface IGenreService
    {
        List<Genre> Genres();
        Genre GetGenreByID(int id);
        void AddGenre(Genre genre);
        void DeleteGenre(int id);
        void UpdateGenre(int id,Genre genre);
        

    }
}