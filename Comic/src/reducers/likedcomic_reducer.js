   var initialState = []
   export default function likedcomic(state = initialState, action) {
       switch (action.type) {
           case 'GET_LIKED_COMIC_ID':
               return [...action.comicid]
           default:
               return [...state]
       }
   }