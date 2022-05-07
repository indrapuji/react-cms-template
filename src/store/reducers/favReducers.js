const initialState = {
    favorites: [],
};

function favReducers(state = initialState, action) {
    if (action.type === 'ADDFAV') {
        return { ...state, favorites: state.favorites.concat(action.payload) };
    }
    return state;
}

function userReducer(state = initialState, action) {
    if (action.type === 'GETUSER') {
        return { ...state, users: action.payload };
    } else if (action.type === 'DETAILUSER') {
        return { ...state, details: action.payload };
    }
    return state;
}

export default favReducers;
