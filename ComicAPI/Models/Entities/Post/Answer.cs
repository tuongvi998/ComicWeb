using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class Answer
    {
        
        public int ID{get;set;}
        public DateTime AnswerTime{get;set;}
        public string Content{get;set;}
        public int PostID{get;set;}
        public int UserID{get;set;}
        public Post Post{get;set;}
        // public User User{get;set;}

    }
}