import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadTodos} from "./actions";

function App() {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(LoadTodos());
  },[])
  return (
      <div>
        <h1>
          список дел:
        </h1>

        {loading ? 'идет загрузка' : ''}
        {todos.map(todo => {
          return(
              <div className='section'>
                  <div className = 'subtitle'>
                       <b> дело:</b>
                  </div>
                <div className='title'>
                  {todo.title}
                </div>
              </div>

          )
        })}

      </div>
  );
}

export default App;
