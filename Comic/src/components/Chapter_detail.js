import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Chap_content from './Chap_content';
import { Link } from 'react-router-dom';
import './Chapter_detail.css';
import { fetchChapter } from '../actions/ChapterAction'
import { connect } from 'react-redux'
import { parenthesizedExpression } from '@babel/types';
class Chapter_detail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchChapter(this.props.match.params.id)
    }
    componentWillMount() {
    }
    option() {
        var chaps = []
        for (var j = 0; j < this.props.comic.length; j++)
            for (var i = 0; i < this.props.comic[j].chapters.length; i++) {
                var select = false;
                if ((i + 1) == localStorage.getItem('chapid')) select = true;
                chaps.push(
                    <option value={this.props.comic[j].chapters[i].chapterID} selected={select}>Chương {this.props.comic[j].chapters[i].stt}: {this.props.comic[j].chapters[i].title}</option>)
            }
        return chaps;
    }
    SelectSync1(name) {

        var list2 = document.getElementById('slt2');
        for (var i = 0; i < list2.length; i++) {
            var listboxname = list2[i].innerHTML.substring(parseInt(list2[i].innerHTML.indexOf('g') + 2), parseInt(list2[i].innerHTML.indexOf(':')))
            if (listboxname === name) {
                list2.selectedIndex = i;
                break;
            }
        }
    }
    SelectSync2(name) {
        var list1 = document.getElementById('slt1');
        for (var i = 0; i < list1.length; i++) {
            var listboxname = list1[i].innerHTML.substring(parseInt(list1[i].innerHTML.indexOf('g') + 2), parseInt(list1[i].innerHTML.indexOf(':')))
            if (listboxname === name) {
                list1.selectedIndex = i;
                break;
            }
        }
    }
    select1() {
        return <>
            <select id={'slt1'} onClick={e => this.SelectSync1(e.target.value)} className="chapter" onChange={(e) => this.props.fetchChapter(e.target.value)} >
                {this.option()}
            </select>
        </>
    }

    select2() {
        return (
            <>
                <select id={'slt2'} onClick={e => this.SelectSync2(e.target.value)} className="chapter" onChange={(e) => this.props.fetchChapter(e.target.value)} >
                    {this.option()}
                </select>
            </>
        )
    }
    setBg(clor_) {
        //alert(clor_);
        console.log("mau " + clor_)
        return clor_;
    }
    show() {
        var name = ""
        var content = ""
        var id_ = 0
        var getColor = this.setBg();
        console.log("mau " +getColor)
        var bgcolor = [
            { name: "Xanh nhạt", _color: "rgb(233, 235, 238)" },
            { name: "Xanh đậm", _color: "rgb(213, 216, 220)" },
            { name: "Xám nhạt", _color: "rgb(213, 216, 220)" },
            { name: "Xám đậm", _color: "rgb(213, 216, 220)" },
            { name: "Hạt sạn", _color: "rgb(213, 216, 220)" },
            { name: "Màu sepia", _color: "rgb(234, 228, 211)" }
        ]
        var color_ = bgcolor.map((a) => {
            return (
                <>
                    <option value={a._color} className="cate ml-5">{a.name}</option>
                </>
            )
        })
        for (var i = 0; i < this.props.chap.length; i++) {
            name = this.props.chap[i].title
            content = this.props.chap[i].content
            id_ = this.props.chap[i].stt
        }
        localStorage.setItem('chapid', id_)
        return (
            <div>
                <div className="container nav-content">
                    <Link id="home" to="/"><i className="fas fa-home"></i> TRANG CHỦ </Link> <i className="fas fa-angle-right"> </i>
                    <Link to={"/Comic/" + this.props.match.params.index}>{localStorage.getItem('comic_name')} </Link><i className="fas fa-angle-right"> </i>
                    <Link to={"/Comic/" + this.props.match.params.index + "/Chapter/" + this.props.match.params.id}> CHƯƠNG {parseInt(id_)}</Link>
                    <select onChange={(e) => (this.setBg(e.target.value))} className="float-right colorName" id="bg">
                        <option>MÀU NỀN</option>
                        {color_}
                    </select>
                    <hr style={{ marginTop: "4px" }} />
                </div>
                <div className="list-chap">
                    <Link id="chapname" to={"/Comic/" + this.props.match.params.index + "/Chapter/" + this.props.match.params.id}>{name}</Link><br />
                    {this.select1()}
                </div>
                <Chap_content id="chap-content" bgcolor={getColor} content={content} />
                {this.select2()}
            </div>
        )
    }

    render() {
        return (
            <div className="">
                <Header />
                {this.show()}
                <hr />
                <Footer />
            </div>

        );

    }
}
const mapStateToProps = (state) => {
    return {
        chap: state.chapter,
        comic: state.comic,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChapter: (chap_id) => dispatch(fetchChapter(chap_id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter_detail);