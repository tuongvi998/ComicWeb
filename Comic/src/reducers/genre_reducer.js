var initialState =  [];
export default function genre(state = initialState, action) { 
  switch (action.type) {
    case 'GET_GENRE':
      return action.gen    
    case 'GET_GENRES':
      return [...action.gens]    
    default:   return [...state]
  }
  }
