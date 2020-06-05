var initialState = [];
export default function user(state = initialState, action) {
    switch (action.type) {
        case 'GET-USER-NAME1':
            return action.user_
        case 'GET_LIKE_USER':
            return action.user

        default:
            //return [...state]
            return state
    }
}