using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services
{
    public interface ILikeService
    {
        void Like(Like like);
        void UnLike(int id);
    }
}