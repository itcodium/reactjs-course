import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ValidateForm  from '../services/ValidateForm';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from "react-router-dom";
// import Link from '@material-ui/core/Link';
// import { withStyles } from '@material-ui/core/styles';
//import USER from '../../../redux/actions/user'

function SignUp(props) {
    // const user = useSelector(state => {}); //state.user
    const user = {
        "nombre": '',
        "apellido": '',
        "telefono": '',
        "password": '',
        "passwordConfirm": '',
        "email": '',
    }
    const status = useSelector(state => {}); // state.user.status
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

    if (!( (user.user && user.user.id) || (status === "idle")) || status !== "succeeded") {
        return (

            <Container component="main" maxWidth="xs">
                
                <CssBaseline />
                <Box sx={{mt: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                    <Typography component="h1" variant="h5" sx={{mb:3}}>
                        Sign up
                    </Typography>
                    <form sx={{width: '100%', justifyContent: "center",}} noValidate>
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
                        <Grid sx={{textAlign: "center", mt: 3 }} item xs={12}>
                            <Button variant="contained" color="primary"
                                disabled={status === "crud" || ValidateForm.hasError(form) || !passwordsMatch()}
                                onClick={() => {
                                        console.log("getUser()", getUser())
                                        /*dispatch(USER.save(getUser())) */
                                }}
                            >Aceptar</Button>
                            {
                                status === "failed" ? <Typography color="red" variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                            }
                        </Grid>
                    </form>
                </Box>
            </Container>
        );
    }
    if (status === "succeeded") {
        return <Container maxWidth="sm" component="main">
            <Typography color="green" component="h1" variant="h2" align="center" gutterBottom>
                Alta exitosa
                </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Click <NavLink to={"/login"} onClick={() => {
                    /* dispatch(USER.init()); */
                }}>Login</NavLink> para ingresar al sistema.
                </Typography>
        </Container >
    }
}
export default SignUp;