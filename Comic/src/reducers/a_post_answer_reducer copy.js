var initialState = []
export default function answer_usname(state = initialState, action) {
    switch (action.type) {
        case 'GET-USER-NAME':
            return [...action.user_]
        default:
            return [...state];
    }

}