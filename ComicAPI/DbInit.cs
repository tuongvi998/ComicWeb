using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComicAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ComicAPI
{
    public  class DbInit
    {
      
        private DataContext _context;
        public DbInit(DataContext context)
        {
            _context=context;
        }

        public async Task Seed()
        {
            if(!_context.Users.Any())
            {
                _context.AddRange(_users);
                await _context.SaveChangesAsync();
            }
            if(!_context.Comics.Any())
            {
                _context.AddRange(_comics);
                await _context.SaveChangesAsync();
            }
            if(!_context.Chapters.Any())
            {
                _context.AddRange(_chapters);
                await _context.SaveChangesAsync();
            }
            if(!_context.Genres.Any())
            {
                _context.AddRange(_genres);
                await _context.SaveChangesAsync();
            }
        }
        List<User> _users= new List<User>{
            new User (){ Username = "ThuNguyen",   Email = "user@gmail.com",
                Password="12345",Role=0,Image="https://middle.pngfans.com/20190505/lx/avatar-user-png-avatar-computer-icons-clipart-c26add6546fc41bb.jpg"
                    },
            new User() {  Username = "NhutThuy",   Email = "user@gmail.com",
                Password="12345",Role=0,Image="https://middle.pngfans.com/20190505/lx/avatar-user-png-avatar-computer-icons-clipart-c26add6546fc41bb.jpg"
                    },
            new User() {Username = "TuongVi",   Email = "user@gmail.com",
                Password="12345",Role=0,Image="https://middle.pngfans.com/20190505/lx/avatar-user-png-avatar-computer-icons-clipart-c26add6546fc41bb.jpg"
                    },
            new User() {Username = "Admin",   Email = "admin@gmail.com",
                Password="12345",Role=1,Image="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                    }
        };
       
        List<Genre> _genres= new List<Genre>{
                new Genre(){ Genre_name="Trinh Thám" },
                new Genre(){Genre_name="Ngôn Tình" },
                new Genre(){ Genre_name="Viễn Tưởng" },
                new Genre(){Genre_name="Xuyên Không" },
                new Genre(){Genre_name="Dị Giới" }
        };
         List<Comic> _comics= new List<Comic>{
                new Comic(){Name="Công Cuộc Bị 999 Em Gái Chinh Phục",Status=0,Author="Đỗ Cầm",
                    Description=" Sẽ thế nào khi bạn mang trong người song tu thần kinh? Sở hữu khả năng xuyên qua 10 thế giới? Đào hoa vận không thua gì Rito (To love ru)? Lập 1 giàn harem, thủy tinh cung khủng nhất vũ trụ về khoe cho bọn bạn gato chơi.Đỗ Cầm có tất cả nhưng lại thừa 1 điều..... thừa bóng ma tâm lý về phụ nữ.Hãy đón xem công cuộc bị chinh phục của anh chàng đen đủi hay may mắn này nhé",
                    Chapter_long=0,Likes=100,Views=100,Update_time=new System.DateTime(2019,11,1),
                    Image="https://sstruyen.com/assets/img/story//cong-cuoc-bi-em-gai-chinh-phuc.jpg",
                    GenreID=1
                 },
                  new Comic(){ Name="Câu Chuyện Hồ Đồ",Status=0,Author="Phong Tử Tam Tam",
                  Description="Cố Minh Sâm giúp Ôn Vãn, lại không ngờ con bé kia lấy oán trả ơn.Mà Ôn Vãn không thẹn với lòng, dám khẳng định: Cô đối với Cố Minh Sâm, chỉ còn kém việc, dâng cái mạng nhỏ này cho anh ta. Kết quả chỉ đổi lấy tờ giấy thỏa thuận li hôn. Quả nhiên, thế giới này vô cùng bất công, người tốt lại chẳng được đền đáp.Dùng một câu để chốt văn án: Kết thúc đoạn hôn nhân hữu danh vô thực  đáng thất vọng, vận đào hoa của Ôn Vãn bỗng nhiên khởi sắc.",
                  Chapter_long=0,Likes=100,Views=100,Update_time=new System.DateTime(2019,11,1),
                    Image="https://sstruyen.com/assets/img/story//cau-chuyen-ho-o.jpg",
                    GenreID=4
                 }
        };
        List<Chapter> _chapters= new List<Chapter>{
                new Chapter(){
                     ComicID=1,Title="Đỗ Mạnh Cầm",STT=1,
                     Content=   "",                     
                 },
                  new Chapter(){
                     ComicID=1,Title="Khổ luyện",STT=2,
                     Content= ""  },
                  new Chapter(){
                     ComicID=2,Title="Bộ mặt thật của 3 bà chị",STT=1,
                     Content="" },
                  new Chapter(){
                     ComicID=2,Title="Xui Kiếp",STT=2,
                     Content=""  }
        };
    }
}