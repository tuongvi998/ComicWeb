import axios from 'axios';
export const fetchChapters = (comic_id) => {

    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics/' + comic_id).then(
            data => {
                const list = data.data.chapters
                dispatch(returnListChapter(list));
            }
        ).catch(error => {
            console.log(error);
        })
    }
}
export const fetchChapter = (chapter_id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/chapters/' + chapter_id).then(
            data => {
                const gen = data.data
                localStorage.setItem('achap',JSON.stringify(gen))
                dispatch(returnChapter(gen))
            }
        )
    }
}
export const addChapter = (comicID, title, content,stt ) => {
    return dispatch => {

        return axios.post('http://127.0.0.1:3000/chapters', { comicID, title, content,stt }).then(

            dispatch(addchapter())

        )
    }
}
export const updateChapter = (chap_id, chapter_name, content) => {
    return dispatch => {
        
                return axios.put('http://127.0.0.1:3000/chapters/' + chap_id, { "title": chapter_name, "content": content }).then(
                    dispatch(updatechapter())
                )
            }
        

}
export const deleteChapter = (chap_id,comic_id) => {
    return dispatch => {
        return axios.delete('http://127.0.0.1:3000/chapters/' + chap_id ).then(
            data => {

                        dispatch(delchapter())
                        return axios.get('http://127.0.0.1:3000/comics/' + comic_id).then(
                        data => {
                            const list = data.data.chapters
                            dispatch(returnListChapter(list));
                        }
                    ).catch(error => {
                        console.log(error);
                        })
                    })
                
            }
    }

const returnChapter = (Chapter) => ({
    type: 'GET_A_CHAPTER',
    chap: Chapter
})
const returnListChapter = (Chapters) => ({
    type: 'SHOW_LIST_CHAPTERS',
    chaps: Chapters
})
const addchapter = () => ({
    type: 'ADD_A_CHAPTER',

})
const updatechapter = () => ({
    type: 'UPDATE_CHAPTER',

})
const delchapter = () => ({
    type: 'DELETE_CHAPTER',

})