using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Services.ComicServices
{
    public class GenreService : IGenreService
    {
        private DataContext _context;
        public GenreService(DataContext context)
        {
            _context=context;
        }
        public void AddGenre(Genre genre)
        {
            _context.Genres.Add(genre);
            _context.SaveChanges();
          
        }

        public void DeleteGenre(int id)
        {
            _context.Genres.Remove(_context.Genres.Where(x=>x.GenreID==id).SingleOrDefault());
            _context.SaveChanges();
          
        }

        public List<Genre> Genres()
        {
            return _context.Genres.ToList();
          
        }

        public Genre GetGenreByID(int id)
        {
            return _context.Genres.Where(x=>x.GenreID==id).SingleOrDefault();
          
        }

        public void UpdateGenre(int id, Genre genre)
        {
            var old= _context.Genres.Where(x=>x.GenreID==id).SingleOrDefault();
            old.Genre_name=genre.Genre_name;
            _context.SaveChanges();
          
        }
    }
}