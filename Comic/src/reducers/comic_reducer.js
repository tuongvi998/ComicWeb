var initialState = [];
export default function comics(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LIST':
            return [...action.list]
        case 'LIST_COMIC_BY_CATEGORY':
            return [...action.comics]
        case 'SHOW_LIST_BY_CATEGORY':
            return [...action.list]    
        case 'SHOW_LIST_FULL':
            return [...action.comics]  
        case 'SEARCH_BY_NAME':
            return [...action.comics]    
        default:
            return [...state];
    }
}