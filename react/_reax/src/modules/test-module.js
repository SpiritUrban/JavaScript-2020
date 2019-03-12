export const DO = 'test-module/DO'
export const DO_REQUESTED = 'counter/DO_REQUESTED'

const initialState = {
    test_count: 10
}

export default (state = initialState, action) => {

    switch (action.type) {

        case DO_REQUESTED:
            return {
                ...state
            }

        case DO:
            return {
                ...state,
                test_count: state.test_count + 10
            }

        default:
            return state
    }
}

export const _do = (n) => {
    console.log('test-module--DO', n)

    return dispatch => {
        dispatch({
            type: DO_REQUESTED
        })

        dispatch({
            type: DO
        })
    }
}




