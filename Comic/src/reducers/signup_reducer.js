var initialState ={}
export default function signup(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP':
      return action.isSignupSuccess
    default:
      return state
  }
}