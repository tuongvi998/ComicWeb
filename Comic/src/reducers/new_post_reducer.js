var initialState = [];
export default function newpost(state = initialState, action) {
    switch (action.type) {
        case 'GET-NAME-OF-A-USER':
            return [...action.name_]
        default:
            return [...state]
    }
}