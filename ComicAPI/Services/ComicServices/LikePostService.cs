using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public class LikePostService : ILikePostService
    {
        DataContext _context;
        public LikePostService(DataContext context)
        {
            _context=context;
        }
        public void AddLikePost(LikePost likepost)
        {
           Post post1=_context.Posts.FirstOrDefault(x=> x.ID== likepost.PostID);
           _context.LikePosts.Add(likepost);
           post1.LikePosts.Add(likepost);
           _context.SaveChanges();
        }

        public List<LikePost> GetLikes()
        {
          return _context.LikePosts.ToList();
        }

        public void UnLikePost(int postid)
        {
            _context.LikePosts.Remove(_context.LikePosts.FirstOrDefault(x=>x.ID==postid));
            _context.SaveChanges();
        }
    }
}