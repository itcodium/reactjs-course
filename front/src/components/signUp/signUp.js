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
    const [form, setForm] = useState({
        nombre: {},
        apellido: {},
        telefono: {},
        email: {},
        passwordConfirm: {},
        password: {}
    })
    ValidateForm.setForm = setForm;
    const getUser = () => {
        return {
            "nombre": form.nombre.value,
            "apellido": form.apellido.value,
            "telefono": form.phone.value,
            "password": form.password.value,
            "passwordConfirm": form.passwordConfirm.value,
            "email": form.email.value,
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
                                id="nombre"
                                label="First Name"
                                name="nombre"
                                error={form.nombre.error}
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
                                error={form.apellido.error}
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
                                error={form.email.error}
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
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="telefono"
                                label="Phone"
                                name="telefono"
                                type="tel"
                                error={form.telefono.error}
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
                                error={form.password.error}
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
                                error={form.passwordConfirm.error}
                                helperText={form.passwordConfirm.message}
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