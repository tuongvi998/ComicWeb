using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class Comic
    {
        public int ID{get;set;}
        public string Name{get;set;}
        public string Author{get;set;}
        public string Description{get;set;}
        public int Status {get;set;}
        public int Chapter_long{get;set;}
        public int Likes{get;set;}
        public int Views{get;set;}
        public DateTime Update_time{get;set;}
        public string Image{get;set;}
        public int GenreID { get; set; }
        public ICollection<Chapter> Chapters { get; set; }
        public ICollection<Like> Likesc { get; set; }
        public ICollection<Comment> Comments{get;set;}
    }
}