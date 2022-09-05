
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ValidateForm from '../../../services/ValidateForm'
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { loginUser } from '../reducers/login'
import STATUS from '../../../store/status';

function LogIn() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: {},
        password: {}
    });
    let location = useLocation();

    ValidateForm.setForm = setForm;
    const status = useSelector(state => state.login?.status)
    const error = useSelector(state => state.login?.error);
    const login = useSelector(state => state.login?.data);
    const navigate = useNavigate();
    useEffect(() => {
        if (login?.user) {
            if (location.state && location.state?.from) {
                navigate(location.state?.from);
            } else {
                if (location.pathname === '/login') {
                    navigate('/');
                }
            }
        }
    });

    if (status !== STATUS.SUCCESS) {
        return <Container component="main" maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5, mt: 8 }}>
                <Avatar>
                    <LockIcon />
                </Avatar>
                <Typography sx={{ mt: 2 }} component="h1" variant="h5">Login</Typography>
                <Grid item>

                    <form sx={{ with: '100%', mt: 1 }} noValidate>
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
                        <Grid sx={{ textAlign: "center", mt: 5 }} item xs={12}>
                            <Button
                                type="button"
                                variant="contained"
                                color="primary"
                                disabled={status === "loading" || ValidateForm.hasError(form)}
                                onClick={() => {
                                    const payload = {
                                        "email": form.email.value,
                                        "password": form.password.value
                                    };
                                    dispatch(loginUser(payload));
                                }}
                                sx={{ mb: 3 }}
                            >
                                {status === STATUS.LOADING ? <CircularProgress /> : "Sign In"}
                            </Button>
                            {
                                status === STATUS.ERROR ? <Typography color="red" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null
                            }
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <NavLink to='/' variant="body2">
                                Forgot password?
                            </NavLink>
                            <NavLink color='red' to="/signup">
                                Don't have an account? Sign Up
                            </NavLink>
                        </Box>
                    </form>
                </Grid>
            </Box>
        </Container>
    }
}

export default LogIn;