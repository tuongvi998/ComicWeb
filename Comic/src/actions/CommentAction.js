import axios from 'axios';
import {returnOneComic} from './ComicActions';
export const fetchComt = (comic_id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comments').then(
            data => {
                const list = data.data;
                dispatch(returnListComt(list));
            }
        )
    }
}

export const addComt = (userID, comicID, content, commentTime) => {
    return dispatch => {
        return axios.post('http://127.0.0.1:3000/comments', {userID,comicID,content,commentTime}).then(           
          d=>     
        {
            dispatch(addNewComt())
                return axios.get('http://127.0.0.1:3000/comics/' + comicID,
                { headers: {
                    "Authorization":'Bearer '+ localStorage.getItem("token"),
                    'Content-Type': 'application/json',
                  }}).then(
                    data => {
                        const c = data.data
                                dispatch(returnOneComic(c))
                            }
                        )
                    
        }

        )

    }
}
const returnListComt = (comt) =>
    ({
        type: 'SHOW-COMT',
        cmt: comt,
    })
const addNewComt = () =>
    ({
        type: 'ADD-COMT'
    })