import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { addTodo, updateTodo } from '../../store/actions/todoActions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  formStyle: {
    margin: '0px auto',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const AddTodo = ({ todo, setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const update = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: 'Kramer',
      };
      dispatch(updateTodo(update, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: '',
      isComplete: false,
    });
  };

  return (
    <form
      noValidate
      className={classes.formStyle}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="standard-required"
        variant="outlined"
        label="Add Todo"
        fullWidth
        autoFocus
        placeholder="type your todo here..."
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </form>
  );
};

export default AddTodo;
