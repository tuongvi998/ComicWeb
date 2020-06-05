var initialState = {}
export default function apost_in(state = initialState, action) {
    switch (action.type) {
        case 'GET_LIKE_POST':
            return action.likes
        default:
            return state;
    }

}