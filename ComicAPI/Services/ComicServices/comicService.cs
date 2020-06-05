using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using ComicAPI.Services.ComicServices;

namespace ComicAPI.Services.ComicServices
{
    public class comicService:IComicService
    {
        private DataContext _context;
        public comicService(DataContext context)
        {
            _context=context;
        }

        public void AddNewComic(Comic comic)
        {
            _context.Comics.Add(comic);
            _context.SaveChanges();
            
        }

        public List<Comic> ComicFull()
        {
              List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(e=> e.Status==1 ).ToList();
            return comics;
          
        }

        public List<Comic> ComicHot()
        {
            int like=0;
            for(int i=this.GetComics().FirstOrDefault().ID;i<this.GetComics().Count;i++)
            {
                Comic c= this.GetComicById(i);
                like+=c.Likes;
            }
            like/=this.GetComics().Count;
            List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(e=> e.Likes > like ).ToList();
            return comics;
          
        }

        public List<Comic> ComicUpdating()
        {
              List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(e=> e.Status==0 ).ToList();
            return comics;
        }

        public void DeleteComic(int id)
        {
             var comic=_context.Comics.FirstOrDefault(x=>x.ID==id);
            _context.Comics.Remove(comic);
             _context.SaveChanges();
          
        }

        public List<Comic> Filter(int genreid,int status)
        {
             List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(x=> x.GenreID==genreid&& x.Status==status).ToList();
            return comics;
        }

        public Comic GetComicById(int Id)
        {
            return _context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(x=>x.ID==Id).SingleOrDefault();
          
        }
        
        public List<Comic> GetComics()
        {
            List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).ToList();
            return comics;
          
        }

        public List<Comic> SearchByGenre(int genreid)
        {
             List<Comic> comics= new List<Comic>();
            comics=_context.Comics.Select(x=> new Comic{
                ID=x.ID,Name=x.Name,Author=x.Author,Update_time=x.Update_time,
                Likes=x.Likes,Views=x.Views,Status=x.Status,Description=x.Description,
                Chapter_long=x.Chapter_long,Image=x.Image,GenreID=x.GenreID,
                Chapters=x.Chapters.Select(e=> new Chapter{
                    STT=e.STT,
                    ChapterID=e.ChapterID,ComicID=e.ComicID,Title=e.Title,
                    Content=e.Content
                }).ToList(),
                 Comments=x.Comments.Select(w=> new Comment{
                    ID=w.ID,Content=w.Content,CommentTime=w.CommentTime,User=w.User
                }).ToList()
            }).Where(x=> x.GenreID==genreid).ToList();
            return comics;
        }

        public List<Comic> SearchByName(string keyword)
        {
            var comics= new List<Comic>();
            if(keyword!="")
            comics=_context.Comics.Where(x=>x.Name.Contains(keyword)|| x.Author.Contains(keyword)).ToList();
            return comics;
          
        }
    
        public void UpdateComic(int id, Comic comic_)
        {
            var comic = _context.Comics.FirstOrDefault(x=>x.ID==id);
            comic.Name=comic_.Name;
            comic.Status=comic_.Status;
            comic.Image=comic_.Image;
            comic.Update_time=comic_.Update_time;
            comic.Author=comic_.Author;
            comic.Chapter_long=comic_.Chapter_long;
            comic.GenreID=comic_.GenreID;
            comic.Description=comic_.Description;
            _context.SaveChanges();
          
        }
    }
}