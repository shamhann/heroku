
export const LoadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=20')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return(dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=20/${id}`,{
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}