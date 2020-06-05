var initialState =  [];
export default function chapters(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LIST_CHAPTERS':
      return [...action.chaps]
    default:
      return [...state]
  }
}