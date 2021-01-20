import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { useSelector, useDispatch } from 'react-redux'
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
import ValidateForm from '../../services/validateForm'


function Login(props) {
    const { classes, state } = props;
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: {},
        password: {}
    })
    ValidateForm.setForm = setForm;

    const status = useSelector(state => state.login.status)

    const redirectPath = () => {
        const locationState = props.location.state;
        const pathname = (
            locationState && locationState.from && locationState.from.pathname
        );
        return pathname || "";
    };

    if (status !== "succeeded") {
        return <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.title} component="h1" variant="h5">Login</Typography>
                <Grid item>
                    <form className={classes.form} noValidate>
                        <Grid container>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                error={form.email.invalid}
                                helperText={form.email.message}
                                type="email"
                                autoComplete="email"
                                autoFocus
                                onChange={ValidateForm.handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                error={form.password.invalid}
                                helperText={form.password.message}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={ValidateForm.handleChange}
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
                                disabled={status === "loading" || ValidateForm.hasError(form)}
                                onClick={() => {
                                    const payload = {
                                        "email": form.email.value,
                                        "password": form.password.value
                                    }
                                    dispatch(LOGIN.check(payload))
                                }}
                                className={classes.submit}
                            >
                                {status === "loading" ? <CircularProgress /> : "Sign In"}
                            </Button>
                            {
                                status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{state.payload.message}</Typography> : null
                            }
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#/SignUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </Container>
    } else {
        return (
            <Redirect to={redirectPath()} />
        );
    }

}

/*
const mapStateToProps = state => {
    console.log('state.login: ', state.login);
    return { state: state.login };
};*/

export default compose(
    withStyles(styles)//,connect(mapStateToProps),
)(Login);