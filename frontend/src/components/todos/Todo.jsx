import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  pos: {
    fontSize: 14,
  },
});

const Todo = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>Create Node API</Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
          >
            Author: Chico
          </Typography>

          <Typography variant="body2" component="p" color="textSecondary">
            Added: 16 days ago
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon>done</Icon>}
          >
            Done
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon>edit</Icon>}
          >
            edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Todo;
