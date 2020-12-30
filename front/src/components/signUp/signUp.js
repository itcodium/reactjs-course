import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './signUp.style.js';
import ValidateForm from '../../services/validateForm'
import USER from '../../redux/actions/user'

function SignUp(props) {
    const { classes, state } = props;
    const dispatch = useDispatch();
    const [form, setForm] = useState({})
    ValidateForm.setForm = setForm;
    const getUser = () => {
        return {
            "user_name": form.user.value,
            "password": form.password.value
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="nombre"
                                onChange={ValidateForm.handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="apellido"
                                onChange={ValidateForm.handleChange}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={ValidateForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="phone"
                                label="Phone"
                                name="phone"
                                autoComplete="phone"
                                onChange={ValidateForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={ValidateForm.handleChange}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm password"
                                type="password"
                                id="confirmPassword"
                                onChange={ValidateForm.handleChange}
                                autoComplete="confirm-password"
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.actions} item xs={12}>
                        <Button variant="contained" color="primary"
                            disabled={ValidateForm.hasError(form)}
                            onClick={() => {
                                dispatch(USER.save(getUser()))
                            }}
                        >Aceptar</Button>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default withStyles(styles)(SignUp);