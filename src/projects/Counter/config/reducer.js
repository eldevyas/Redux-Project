const initialState = { count: 0, city: "Rabat" };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // log to console
            console.log("Incrementing...");
            return {
                ...state,
                count: state.count + 1
            }

        case 'DECREMENT':
            // log to console
            console.log("Decrementing...");

            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : state.count
            }
        case 'RESET':
            // log to console
            console.log("Resetting...");
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}
export default reducer;