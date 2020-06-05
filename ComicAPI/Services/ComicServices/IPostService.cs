using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services
{
    public interface IPostService
    {
        List<Post> GetPosts();
        Post GetPostByID(int id);
        void AddPost(Post post);
        void DeletePost(int id);
        void UpdatePost(int id, Post post);
    }
}