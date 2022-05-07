export function addNew(favUser) {
    return { type: 'ADDFAV', payload: favUser };
}

//ex to use action with fecth

// export function getData() {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((res) => res.json())
//             .then((data) =>
//                 dispatch({
//                     type: 'GETUSER',
//                     payload: data,
//                 })
//             )
//             .catch((err) => console.log(err));
//     };
// }
