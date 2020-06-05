import axios from 'axios';
export const getListUserFull = () => {

    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users',
        {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }
        ).then(
            data => {
                dispatch(fulllist(data.data))
            }
        )
    }
}
const fulllist = (users) => ({
    type: 'GET_LIST_USER_FULL',
    users

})
export const getListUserLimit = (_end) => {

    return dispatch => {

        return axios.get('http://127.0.0.1:3000/users?_start=0&_end=' + _end).then(
            data => {
                dispatch(listlimit(data.data))
            }
        )
    } 
}
const listlimit = (users) => ({
    type: 'GET_LIST_USER_LIMIT',
    users

})

export const ChangeRole = (role, user_id) => {
    return dispatch => {
        return axios.patch('http://127.0.0.1:3000/users/' + user_id, {  "role":role  },
        {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }).then(
            (data) =>
            dispatch(changerole())
        )
    }
}
const changerole = () => ({
    type: 'CHANGE_ROLE_USER',

})
export const Search = (keyword) => {
    return dispatch => {

        return axios.get('http://127.0.0.1:3000/users?username_like=' + keyword).then(
            (data) =>
            dispatch(search(data.data))
        )
    }
}
const search = (users) => ({
    type: 'SEARCH',
    users
})
export const deleteUser = (user_id) => {
    return dispatch => {

        return axios.delete('http://127.0.0.1:3000/users/' + user_id, {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }
        ).then(
            (data) => {
                dispatch(deleteuser())
                return axios.get('http://127.0.0.1:3000/users',{
                    headers: {
                        "Authorization": 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json',
                    }
                }
                ).then(
                    data => {
                        dispatch(fulllist(data.data))
                    }
                )
            }
        )

    }
}
const deleteuser = () => ({
    type: 'DELETE_USER',

})
export const getLike = (id) => {
    console.log(id)
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users/' + id, {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }).then(
            d => {
                dispatch(getlike(d.data.likes))
            }
        )
    }
}
const getlike = (likes) => ({
    type: 'USER_PAGE_LIKE',
    likes

})
export const getPost = (id) => {
    console.log(id)
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users/' + id, {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }).then(
            d => {
                dispatch(getpost(d.data.posts))
            }
        )
    }
}
const getpost = (posts) => ({
    type: 'USER_PAGE_POST',
    posts

})