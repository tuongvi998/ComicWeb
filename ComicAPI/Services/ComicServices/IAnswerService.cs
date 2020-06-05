using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;

namespace ComicAPI.Services.ComicServices
{
    public interface IAnswerService
    {
        void AddAnswer(Answer ans);
        void DeleteAnswer(int id);
        void UpdateAnswer(int id, Answer ans);
        List<Answer> GetAnswers();
        Answer GetAnswerByID(int id);
    }
}