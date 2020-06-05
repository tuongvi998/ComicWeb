using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class Post
    {
        public int ID{get;set;}
        public int UserID{get;set;}
        public string Title{get;set;}
        public string PostContent{get;set;}
        public DateTime PostTime{get;set;}
        public ICollection<Answer> Answers{get;set;}
        public ICollection<LikePost> LikePosts{get;set;}
        public User User{get;set;}
    }
}