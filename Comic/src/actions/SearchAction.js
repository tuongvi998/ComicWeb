import axios from 'axios';
export const SearchByName = (keyword) => {

    return dispatch => {

        return axios.get('http://127.0.0.1:3000/comics/search/' + keyword).then(
            data => {
                dispatch(searchByName(data.data))
            }
        )
    }
}
export const SearchByGenre = (genreid, status) => {
    return dispatch => {

        return axios.get('http://127.0.0.1:3000/comics/searchByGenre/' + genreid + "/" + status).then(
            data => {
                dispatch(searchByGenre(data.data))
            }
        )
    }
}
const searchByName = (comics) => ({
    type: 'SEARCH_BY_NAME',
    comics: comics

})
const searchByGenre = (comics) => ({
    type: 'SEARCH_BY_GENRE',
    comics: comics

})