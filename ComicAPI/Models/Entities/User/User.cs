using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class User
    {
        public int ID{get;set;}
        public string Username{get;set;}
        public string Email{get;set;}
        public string Password{get;set;}
        public string Image {get;set;}
        public int Role {get;set;}
        public ICollection<Post> Posts{get;set;}
        public ICollection<Comment> Comment { get; set; }
        public ICollection<Like> Likes{get;set;}
       
    }
}