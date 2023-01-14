const initialState = {
    message: "Subscribe to Simplilearn",
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if(action.type === "Message change"){
        newState.message = "Thank you for subscribing";
    }
    return newState;
}

export default reducer;