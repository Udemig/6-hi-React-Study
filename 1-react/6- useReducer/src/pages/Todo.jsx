import { useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
    };

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Gönder</button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: 'CLEAR_TODOS',
            })
          }
        >
          Sıfırla
        </button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li className="todo">
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: todo.id })
              }
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
