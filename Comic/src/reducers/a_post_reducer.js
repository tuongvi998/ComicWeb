var initialState = {}
export default function apost(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_A_POST':
            return action.post
        default:
            return state;
    }

}