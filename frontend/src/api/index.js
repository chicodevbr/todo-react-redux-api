export const url = 'https://api-todo-redux.herokuapp.com/api';

export const setHeaders = () => {
  const header = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return header;
};
