var initialState =  [];
export default function search(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_BY_NAME':
      return [...action.comics]    
    case 'COMIC_HOT':
      return [...action.comics]  
    case 'LIST_COMIC_BY_CATEGORY' :
      return [...action.comics]
    case 'FILTER':
      return [...action.comics]
    case 'SHOW_LIST':
      return [...action.list]
    default:
      return [...state];
  }
}
