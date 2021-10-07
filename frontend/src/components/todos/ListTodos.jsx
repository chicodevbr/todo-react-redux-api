import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import Todo from './Todo';
import { getTodos } from '../../store/actions/todoActions';

const useStyles = makeStyles({
  todosStyle: {
    margin: '20px auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ListTodos = ({ setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Typography
        variant="h6"
        className={classes.todosStyle}
        color="textSecondary"
      >
        {todos.length > 0 ? 'Todos' : 'noTodosYet'}
      </Typography>
      {todos &&
        todos.map((todo) => {
          return <Todo todo={todo} key={todo._id} setTodo={setTodo} />;
        })}
    </>
  );
};

export default ListTodos;
