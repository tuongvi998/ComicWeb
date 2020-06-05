var initialState = []
export default function answer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ANSWERS':
            return [...action.answers]
        default:
            return [...state];
    }

}