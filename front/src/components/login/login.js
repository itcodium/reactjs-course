import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styles from './login.style.js';
import LOGIN from '../../redux/actions/login'
import LoginService from '../../services/LoginService'



function Login(props) {

    const service = LoginService;
    const { classes, state } = props;
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState({
        user: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    useEffect(() => {
        if (service.isLoggedIn()) {
            setShouldRedirect(true)
        } else {

            console.log('no login ');
        }
    });

    const redirectPath = () => {
        const locationState = props.location.state;
        const pathname = (
            locationState && locationState.from && locationState.from.pathname
        );
        console.log('pathname: ', pathname);
        return pathname;

    };

    if (shouldRedirect) {
        return (
            <Redirect to={redirectPath()} />
        );
    } else {

        return <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.title} component="h1" variant="h5">
                    Sign in
                    </Typography>
                <Grid item>
                    <form className={classes.form} noValidate>
                        <Grid container>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="Email Address"
                                name="user"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                        </Grid>
                        <Grid className={classes.actions} item xs={12}>
                            <Button
                                type="button"
                                variant="contained"
                                color="primary"
                                disabled={state.loading}
                                onClick={() => {
                                    const payload = {
                                        "user_name": data.user,
                                        "password": data.password
                                    }
                                    console.log('payload: ', payload);
                                    dispatch(LOGIN.check(payload))
                                }}
                                className={classes.submit}
                            >
                                {state.loading ? <CircularProgress /> : "Sign In"}
                            </Button>
                            {
                                state.error ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{state.payload.message}</Typography> : null
                            }
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </Container>
    }

}

const mapStateToProps = state => {
    return { state: state.login };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Login);

/*
if (props.state.loading) {
    return <CircularProgress />
}
if (props.state.error) {
    return <Typography variant="h6" component="h2">
        Error al obtener el listado.
  </Typography>
}
if (props.state.recipes && props.state.recipes.length) {
    return  <Typography variant="h6" component="h2">
    login ok
</Typography>
}

*/