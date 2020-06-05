import axios from 'axios';
export const fetchListComic = () => {
    
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics', { headers: {
            "Authorization":'Bearer '+ localStorage.getItem("token"),
            'Content-Type': 'application/json',
          }}).then(data => {
            
            dispatch(returnList(data.data))
        }).catch(error => {
            console.log(error)
        })
    }
}
export const fetchComicByCategory = (genre_id) => {
    return dispatch => {
            return axios.get('http://127.0.0.1:3000/comics/searchByGenre/' + genre_id).then(data => {
                dispatch(returnComicByCategory(data.data))
            })
    }
}
export const getLikedComics = (userid) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/likes?user_id=' + userid).then(data => {
            dispatch(returnLikedComicId(data.data))
        })
    }
}
export const fetchOneComic = (Id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/' + Id,
        { headers: {
            "Authorization":'Bearer '+ localStorage.getItem("token"),
            'Content-Type': 'application/json',
          }}).then(
            data => {
                const c = data.data
                
                dispatch(returnOneComic(c))
                localStorage.setItem('acomic',JSON.stringify(c))            
                    }
                )
                }
}
export const fetchComicHot = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/comicHot').then(data => {
            dispatch(returnComicHot(data.data))
        })
    }
}
export const fetchComicUpdateNew = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/comicUpdating').then(data => {
            dispatch(returnComicUpdateNew(data.data))
        })
    }
}
export const fetchComicFull = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/comicFull').then(data => {
            dispatch(returnComicFull(data.data))
        })
    }
}
export const filter = (genre_id,status) => {
    if(genre_id==0)
    {
        return dispatch => {
            return axios.get('http://127.0.0.1:3000/comics', { headers: {
                "Authorization":'Bearer '+ localStorage.getItem("token"),
                'Content-Type': 'application/json',
              }}).then(data => {
                
                dispatch(returnList(data.data))
            }).catch(error => {
                console.log(error)
            })
        }
    }
    else
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/Filter/'+genre_id+"/"+status).then(data => {
            dispatch(returnFilter(data.data))
        })
    }
}

export const likeComic = (comic_id, Number_of_Like) => {
    return dispatch => {
        return axios.patch('http://127.0.0.1:3000/comics?id=' + comic_id, Number_of_Like).then(
            (data) => {

                dispatch(likeComic(data.data))
            })
    }
}
export const addComic = (name, genre_id, author, chap_number, des, date, img) => {
    
    return dispatch => {


        return axios.post('http://127.0.0.1:3000/comics/', {
            'name': name,
            'author': author,
            'genreID': genre_id,
            'description': des,
            'chapter_long': chap_number,
            'status': 0,
            'likes': 0,
            'views': 0,
            'update_time': date,
            'image': img
        }).then(

            dispatch(addcomic())
        )
    }
}
export const deleteComic = (id) => {
    return dispatch => {
        return axios.delete('http://127.0.0.1:3000/comics/' + id).then(
            (data) => {
                dispatch(delComic())
                return axios.get('http://127.0.0.1:3000/comics').then(data => {
                    dispatch(returnList(data.data))
                })
            }
        )
    }

}
export const updateComic = (id, name, author, genreID, des, Image, date, chaps, Status,likes,views) => {
    return dispatch => {
        return axios.put('http://127.0.0.1:3000/comics/' + id, {
            'name': name,
            'author': author[0],
            'genreID': genreID[0],
            'image': Image[0],
            'description': des[0],
            'update_time': date,
            'chapter_long': chaps,
            'status': Status[0]
        }).then(
            (data) => {
               
                dispatch(updatecomic())

            }
        ).catch(error=> console.log(error))
    }

}
export const addCategory=(cate) => {
    return dispatch=>{
        return axios.post('http://127.0.0.1:3000/genres',{genre_name:cate}).then(
            data=>{
                dispatch(addGenre())
            }
        )
    }
}
const addGenre = () => ({
    type: 'ADD_GENRE',
  
});
const returnList = (comics) => ({
    type: 'SHOW_LIST',
    list: comics
});
export const returnOneComic = (comic) => ({
    type: 'SHOW_A_COMIC',
    comic: comic
})
const returnLikedComicId = (comicid) => ({
    type: 'GET_LIKED_COMIC_ID',
    comicid
})
const like = (comic) => ({
    type: 'LIKE',
    comic: comic
})

const returnComicHot = (comics) => ({
    type: 'COMIC_HOT',
    comics: comics
})
const returnComicUpdateNew = (comics) => ({
    type: 'COMIC_UPDATE_NEW',
    comics: comics
})
const returnComicFull = (comics) => ({
    type: 'SHOW_LIST_FULL',
    comics: comics
})
const returnComicByCategory = (comics) => ({
    type: 'LIST_COMIC_BY_CATEGORY',
    comics
})
const returnFilter = (comics) => ({
    type: 'FILTER',
    comics
})

const addcomic = () => ({
    type: 'ADD_COMIC',

})
const delComic = () => ({
    type: 'DELETE_COMIC',

})
const updatecomic = () => ({
    type: 'UPDATE_COMIC',

})