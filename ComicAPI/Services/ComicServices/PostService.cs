using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services
{
    public class PostService : IPostService
    {
        DataContext _context;
        public PostService(DataContext context)
        {
            _context=context;
        }
        public void AddPost(Post post)
        {
            User  user= _context.Users.FirstOrDefault(x=> x.ID==post.UserID);
            _context.Posts.Add(post);
            user.Posts.Add(post);
            _context.SaveChanges();
        }

        public void DeletePost(int id)
        {
            _context.Posts.Remove(_context.Posts.FirstOrDefault(x=>x.ID==id));
            _context.SaveChanges();
        }

        public Post GetPostByID(int id)
        {
           return _context.Posts.Where(x=>x.ID==id).Select(y=> new Post{
               ID=y.ID,
               Title=y.Title,
               LikePosts=y.LikePosts,
               Answers=y.Answers,
               PostContent=y.PostContent,
               User=y.User,
               PostTime=y.PostTime               
           }).SingleOrDefault();
        }

        public List<Post> GetPosts()
        {
            List<Post> posts = _context.Posts.Select(x=> new Post{
                ID=x.ID,
                Title=x.Title,
                User=x.User,
                PostContent=x.PostContent,
                PostTime=x.PostTime,
                LikePosts=x.LikePosts,
                Answers=x.Answers.ToList()
            }).ToList();
            return posts;

        }

        public void UpdatePost(int id, Post post)
        {
           Post post1= _context.Posts.FirstOrDefault(x=> x.ID==id);
           post1.PostContent=post.PostContent;
           post1.PostTime=post.PostTime;
           post1.Title=post.Title;
           _context.SaveChanges();
        }
    }
}