using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services
{
    public class LikeService : ILikeService
    {
        DataContext _context;
        public LikeService(DataContext dataContext)
        {
            _context=dataContext;
        }

        public void Like(Like like)
        {
            _context.Likes.Add(like);
            Comic comic= _context.Comics.FirstOrDefault(x=> x.ID==like.ComicID);
            User user=_context.Users.FirstOrDefault(x=> x.ID==like.UserID);
            comic.Likesc.Add(like);
            comic.Likes++;
            user.Likes.Add(like);
            _context.SaveChanges();
            
        }

        public void UnLike(int id)
        {
           Like like= _context.Likes.FirstOrDefault(x=> x.ID==id);
           _context.Likes.Remove(like);
           _context.SaveChanges();
        }
    }
}