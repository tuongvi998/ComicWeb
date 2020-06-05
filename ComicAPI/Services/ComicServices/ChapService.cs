using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public class ChapService : IChapService
    {
        private DataContext _context;
        public ChapService(DataContext context)
        {
            _context=context;
        }
        public void AddChap(Chapter chap)
        {
            var comic= new Comic();
            comic= _context.Comics.FirstOrDefault(x=> x.ID==chap.ComicID);
            _context.Chapters.Add(chap);
            comic.Chapters.Add(chap);            
            _context.SaveChanges();
          
        }

        public void DeleteChap(int id)
        {
            var chap= _context.Chapters.SingleOrDefault(x=> x.ChapterID==id);
            _context.Chapters.Remove(chap);            
            _context.SaveChanges();
          
        }

        public List<Chapter> GetChaps()
        {
            return _context.Chapters.ToList();
          
        }

        public List<Chapter> GetChapsofComic(int id)
        {
            var chaps= new List<Chapter>();
            chaps= _context.Chapters.Where(x=>x.ChapterID==id).ToList();
            return chaps;
          
        }

        public void UpdateChap(int chapid, Chapter chapter)
        {
            var old= _context.Chapters.FirstOrDefault(x=> x.ChapterID==chapid);
            old.Title=chapter.Title;
            old.Content=chapter.Content;
            _context.SaveChanges();
          
        }
    }
}