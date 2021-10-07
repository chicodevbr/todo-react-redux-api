import { toast } from 'react-toastify';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      toast.success('todo was added...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...state];
    case 'GET_TODOS':
      return action.todos.data;
    case 'UPDATE_TODO':
      toast.success('todo was updated...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case 'CHECK_TODO':
      toast.success('todo status was changed...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case 'DELETE_TODO':
      toast.success('todo was deleted...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) => todo._id !== action.id);

    case 'CLEAR_TODOS':
      return [];
    default:
      return state;
  }
};

export default todoReducer;
