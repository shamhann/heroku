import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadTodos, removeTodo} from "./actions";
import Header from "./Header";

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoadTodos());
    },[])

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
     return (
        <div className='basis'>
           <Header/>
            <h1 className='img'>Картинки</h1>
            {loading ? 'идет загрузка' : ''}
            {todos.map(post => {
                return(
                    <div className='todo'>
                        <div>
                            <input  type="checkbox"/>
                        </div>
                            <div className='post'>
                                <img src={post.url} alt=""/>
                            </div>
                        <div className= 'actions'>
                            <button className='button' onClick={() => handleDelete(post.id)}>
                               <b> Delete </b>
                            </button>
                        </div>
                    </div>

                )
            })}

        </div>
    );
}

export default App;