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
export const deleteTodo = (id) => {
    return (dispatch) => {
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
export const checkTodo = (id,deleted) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=20/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({deleted: !deleted}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(() => {
               dispatch({
                   type: 'check',
                   payload: id
               })
            })
    }

}