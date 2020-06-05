using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class Like
    {
        public int ID{get;set;}
        public int UserID{get;set;}
        public int ComicID{get;set;}
        public Boolean check {get;set;}
        public Comic Comic{get;set;}
        public User User{get;set;}
        
    }
}