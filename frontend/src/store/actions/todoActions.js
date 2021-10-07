import axios from 'axios';
import { url } from '../../api';

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({
          type: 'GET_TODOS',
          todos,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/todos`, newTodo)
      .then((todo) => {
        dispatch({
          type: 'ADD_TODO',
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updateTodo = (updateTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/todos/${id}`, updateTodo)
      .then((todo) => {
        dispatch({
          type: 'UPDATE_TODO',
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
