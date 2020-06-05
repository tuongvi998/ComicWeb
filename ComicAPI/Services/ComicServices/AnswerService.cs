using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public class AnswerService : IAnswerService
    {
        DataContext _context;
        public AnswerService(DataContext context)
        {
            _context=context;
        }
        public void AddAnswer(Answer ans)
        {
            _context.Answers.Add(ans);
            Post post= _context.Posts.FirstOrDefault(x=> x.ID==ans.PostID);
            post.Answers.Add(ans);
            _context.SaveChanges();
        }

        public void DeleteAnswer(int id)
        {
            _context.Answers.Remove(_context.Answers.FirstOrDefault(x=> x.ID==id));
            _context.SaveChanges();
        }

        public Answer GetAnswerByID(int id)
        {
            return _context.Answers.Where(x=> x.ID==id).Select(y => new Answer{
                ID=y.ID,
                AnswerTime=y.AnswerTime,
                UserID=y.UserID,
                PostID=y.PostID,
                Content=y.Content
            }).SingleOrDefault();
        }

        public List<Answer> GetAnswers()
        {
            return _context.Answers.ToList();
        }

        public void UpdateAnswer(int id, Answer ans)
        {
            Answer a= _context.Answers.FirstOrDefault(x=> x.ID==id);
            a.AnswerTime=ans.AnswerTime;
            a.Content=ans.Content;
            _context.SaveChanges();
        }
    }
}