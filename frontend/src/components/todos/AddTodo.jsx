import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

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

const AddTodo = () => {
  const classes = useStyles();

  return (
    <form noValidate className={classes.formStyle} autoComplete="off">
      <TextField
        id="standard-required"
        variant="outlined"
        label="Add Todo"
        fullWidth
        autoFocus
        placeholder="type your todo here..."
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
