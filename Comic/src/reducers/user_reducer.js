var initialState = {
    full: [],
    limit: [],
    user: []
}
export default function users(state = initialState, action) {
    switch (action.type) {
        case 'GET_LIST_USER_FULL':
            return Object.assign({}, {
                full: [...action.users]
            });
        case 'GET_LIST_USER_LIMIT':
            return Object.assign({}, {
                limit: [...action.users]
            });
        case 'SEARCH':
            return Object.assign({}, {
                limit: [...action.users]
            });
        default:
            return state
    }
}