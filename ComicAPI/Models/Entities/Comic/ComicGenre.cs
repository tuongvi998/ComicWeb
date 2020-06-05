using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicAPI.Models.Entities
{
    public class ComicGenre
    {
        public int ComicID { get; set; }
        public int GenreID{ get; set; }
        public  Comic Comic { get; set; }        
        public Genre Genre { get; set; }
        
    }
}