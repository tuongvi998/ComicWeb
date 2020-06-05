var initialState =  [];
export default function chapter(state = initialState, action) {
  switch (action.type) {
    case 'GET_A_CHAPTER':
      return action.chap
    default:
      return [...state]
  }
}