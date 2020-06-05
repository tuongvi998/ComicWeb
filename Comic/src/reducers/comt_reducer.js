var initialState = [];
export default function comt(state = initialState, action) {
    switch (action.type) {
        case 'SHOW-COMT':
            return [...action.cmt]
                // case 'ADD-C0MT':
                //     return [...action.addComt]
        default:
            return [...state]
    }
}