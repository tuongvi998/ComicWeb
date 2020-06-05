import { combineReducers } from 'redux';
import comics from './comic_reducer';
import login from './login_reducer';
import logout from './login_reducer';
import genre from './genre_reducer';
import chapters from './chapter_reducer';
import signup from './signup_reducer';
import comic from './a_comic_reducer';
import chapter from './a_chapter_reducer';
import comichot from './comic_hot_reducer';
import comicnew from './comic_update_new_reducer';
import search from './Search_reducer';
import users from './user_reducer';
import like from './like_reducer';
import comt from './comt_reducer';
import user from './LoadUserReducer';
import likedcomic from './likedcomic_reducer';
import user1 from './user_page_reducer';
import lpost from './postF_reducer';
import apost from './a_post_reducer';
import apost_in from './a_post_reducer copy';
import answer from './a_post_answer_reducer';
import answer_usname from './a_post_answer_reducer copy';
import newpost from './new_post_reducer';
const appReducers = combineReducers({
    comics,
    comic,
    comichot,
    comicnew,
    chapters,
    chapter,
    login,
    signup,
    genre,
    search,
    users,
    like,
    comt,
    user,
    likedcomic,
    user1,
    lpost,
    apost,
    apost_in,
    answer,
    answer_usname,
    newpost
});
export default appReducers;