const initialState = {
    sidebar: true,
};

function sidebarReducers(state = initialState, action) {
    if (action.type === 'CHANGE') {
        return { ...state, sidebar: action.payload };
    }
    return state;
}

//ex to use reducers

// function favReducsidebar(state = initialState, action) {
//     if (action.type === 'GETUSER') {
//         return { ...state, users: action.payload };
//     } else if (action.type === 'DETAILUSER') {
//         return { ...state, details: action.payload };
//     }
//     return state;
// }

export default sidebarReducers;
