using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public interface IChapService
    {
        void AddChap(Chapter chap);
        void DeleteChap(int id);
        List<Chapter> GetChapsofComic(int comicid);
        List<Chapter> GetChaps();
        void UpdateChap(int chapid,Chapter chapter);
    }
}