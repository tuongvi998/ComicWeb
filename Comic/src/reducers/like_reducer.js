var initialState = {}
export default function like(state = initialState, action) {
    switch (action.type) {
        case 'LIKED':
            return action.liked
        case 'GET-LIKE':
            return action.check
        default:
            return state
    }
}