import React from 'react';
import './Forum.css';
import Header from './Header';
import ForumRight from './ForumRight';
export class Forum extends React.Component 
{
    render() {
        return (
            <>
                <Header/>
                <div className="row">
                    <div className="col-md-3">
                        {/* <p>đây là phần left chứa lời giới thiệu các thứ thôi nhảm nhí</p> */}
                        <div className="groupinf">
                            <b>Chào mừng đến với đại bản doanh của TVT. Đây là nơi dành cho mọi người cùng thảo luận và tìm kiếm những thông tin về cuốn truyện mình muốn tìm. Hãy cùng nhau kết nối và chia sẻ nhé!!!!</b>
                        </div>
                    </div>
                    <div className="col-md-9 ">
                        {/* <p>bên đây là right chứa các bài đăng nhờ vã tìm truyện các kiểu</p> */}
                        <div className="listPost">
                            <ForumRight/>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Forum;
