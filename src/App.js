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
        {loading ? 'идет загрузка' : ''}
        {todos.map(todo => {
          return(
              <div>
                {todo.title}
              </div>
          )
        })}

      </div>
  );
}

export default App;
