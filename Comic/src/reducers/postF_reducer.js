var initialState = [];
export default function lpost(state = initialState, action) {
    switch (action.type) {
        case 'GET-LIST-POST':
            return [...action.posts]
        default:
            return [...state]
    }
}