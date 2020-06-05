var initialState = {}
export default function user1(state = initialState, action) {
    switch (action.type) {
        case 'USER_PAGE_LIKE':
            return action.likes
        case 'USER_PAGE_POST':
            return action.posts
        default:
            return state;
    }
}