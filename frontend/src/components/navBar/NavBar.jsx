import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link, useHistory } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  linkStyle: {
    color: '#fafafa',
    textDecoration: 'none',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(state);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    history.push('/signin');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkStyle}>
              ToDo App
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography>Signed in as {auth.name}</Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  SignIn
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signup">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
