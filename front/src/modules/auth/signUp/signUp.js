import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FormControl } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import styles from './signUp.style.js';
import ValidateForm from '../../../services/validateForm'
import USER from '../../../redux/actions/user'

function SignUp(props) {
    const { classes } = props;


    const user = useSelector(state => state.user);
    const status = useSelector(state => state.user.status);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        nombre: {},
        apellido: {},
        telefono: { required: false },
        email: {},
        password: {},
        passwordConfirm: {},
    })
    ValidateForm.setForm = setForm;
    const getUser = () => {
        return {
            "nombre": form.nombre.value,
            "apellido": form.apellido.value,
            "telefono": form.telefono.value,
            "password": form.password.value,
            "passwordConfirm": form.passwordConfirm.value,
            "email": form.email.value,
        }
    }

    const passwordsMatch = () => {
        if (form.password.value === form.passwordConfirm.value) {
            return true;
        }
        return false;
    }
    const passwordsMatchMessage = () => {
        if (!passwordsMatch() && form.password.valid && form.passwordConfirm.valid) {
            return <FormControl error={true}>
                <FormHelperText >Password doesn't match.</FormHelperText>
            </FormControl>
        }
    }

    console.log('status: ', status);
    console.log('user: ', user);
    if (!(user.users && user.users.id || status === "idle") || status !== "succeeded") {


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
                                    id="nombre"
                                    label="First Name"
                                    name="nombre"
                                    error={form.nombre.invalid}
                                    helperText={form.nombre.message}
                                    onChange={ValidateForm.handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Last Name"
                                    name="apellido"
                                    error={form.apellido.invalid}
                                    helperText={form.apellido.message}
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
                                    error={form.email.invalid}
                                    helperText={form.email.message}
                                    type="email"
                                    autoComplete="email"
                                    onChange={ValidateForm.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    id="telefono"
                                    label="Phone"
                                    name="telefono"
                                    type="tel"
                                    error={form.telefono.invalid}
                                    helperText={form.telefono.message}
                                    autoComplete="phone"
                                    onChange={ValidateForm.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    name="password"
                                    error={form.password.invalid}
                                    helperText={form.password.message}
                                    onChange={ValidateForm.handleChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Confirm password"
                                    type="password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    error={form.passwordConfirm.invalid}
                                    helperText={form.passwordConfirm.message}
                                    onChange={ValidateForm.handleChange}
                                    autoComplete="confirm-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {passwordsMatchMessage()}
                            </Grid>

                        </Grid>
                        <Grid className={classes.actions} item xs={12}>
                            <Button variant="contained" color="primary"
                                disabled={status === "crud" || ValidateForm.hasError(form) || !passwordsMatch()}
                                onClick={() => {
                                    dispatch(USER.save(getUser()))
                                }}
                            >Aceptar</Button>
                            {
                                status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                            }
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
    if (status === "succeeded") {
        return <Container maxWidth="sm" component="main">
            <Typography className={classes.ok} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Alta exitosa
                </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Click <Link href={"#/Login"} onClick={() => {
                    dispatch(USER.init());
                }}>Login</Link> para ingresar al sistema.
                </Typography>
        </Container >
    }

}

export default withStyles(styles)(SignUp);