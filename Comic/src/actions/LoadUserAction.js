import axios from 'axios';
export const getUserName = () => {
    axios.get('http://127.0.0.1:3000/api/login/njcdk')
        .then(
            data => {
                const token_ = data.data
                console.log(token_)
                localStorage.setItem("token1", token_);
            })
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users', {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token1"),
                'Content-Type': 'application/json',
            }
        }).then(
            data => {

                const us = data.data
                dispatch(userInfo(us))
            }
        )
    }
}
export const getUName = (id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users/' + id, {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }).then(
            data => {
                const u = data.data
                dispatch(uname(u))
            }
        )
    }
}
const userInfo = (user) => ({
    type: "GET-USER-NAME",
    user_: user
})

const uname = (usn) => ({
    type: "GET-NAME-OF-A-USER",
    name_: usn
})