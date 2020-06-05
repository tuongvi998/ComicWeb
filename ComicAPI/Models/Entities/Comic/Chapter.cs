using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class Chapter
    {
        public int ChapterID{get;set;}
        public int ComicID { get; set; }
        public int STT{get;set;}
        public string Title{get;set;}
        public string Content{get;set;}
        public Comic Comic { get; set; }
    }
}