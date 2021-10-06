import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import Todo from './Todo';

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

const ListTodos = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        className={classes.todosStyle}
        color="textSecondary"
      >
        Todos
      </Typography>
      <Todo />
    </>
  );
};

export default ListTodos;
