using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public interface ICommentService
    {
        void AddComment(Comment comment);
        List<Comment> GetComments();
        void DeleteComment(int id);
        void UpdateComment(int id,Comment comment);
        Comment GetCommentById(int id);

    }
}