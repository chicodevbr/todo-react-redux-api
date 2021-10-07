import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

import { checkTodo, deleteTodo } from '../../store/actions/todoActions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  pos: {
    fontSize: 14,
  },
  checked: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textDecoration: 'line-through',
  },
});

const Todo = ({ todo, setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setTodo(todo);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          {todo.isComplete ? (
            <Typography className={classes.checked}> {todo.name} </Typography>
          ) : (
            <Typography className={classes.title}> {todo.name} </Typography>
          )}
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
          >
            Author: George
          </Typography>

          <Typography variant="body2" component="p" color="textSecondary">
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </CardContent>
        <CardActions>
          {todo.isComplete ? (
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              startIcon={<Icon>done</Icon>}
              onClick={() => handleCheck(todo._id)}
            >
              Done
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Icon>done</Icon>}
              onClick={() => handleCheck(todo._id)}
            >
              Done
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon>edit</Icon>}
            onClick={() => handleUpdateClick()}
          >
            edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Todo;
