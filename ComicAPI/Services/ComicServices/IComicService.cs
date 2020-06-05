using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public interface IComicService
    {
         void AddNewComic(Comic comic);
        void DeleteComic(int id);
        Comic GetComicById(int Id);
        List<Comic> GetComics();
        void UpdateComic(int id, Comic comic);
        List<Comic> SearchByName(string keyword);
        List<Comic> ComicHot();
        List<Comic> SearchByGenre(int genreid);
        List<Comic> Filter (int genreid,int status );
        List<Comic> ComicFull();
        List<Comic> ComicUpdating();
    }

}