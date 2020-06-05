using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public interface ILikePostService
    {
        void AddLikePost(LikePost post);
        void UnLikePost(int postid);
        List<LikePost> GetLikes();
        
    }
}