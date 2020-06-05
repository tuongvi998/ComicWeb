var initialState =  [];
export default function comichot(state = initialState, action) {
  switch (action.type) {
    case 'COMIC_HOT':
      return [...action.comics]
    default:
      return [...state];
  }
}
