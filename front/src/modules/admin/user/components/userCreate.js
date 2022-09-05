import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { FormControl } from '@mui/material';
import { FormHelperText } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './user.style.js';
import ValidateForm from '../../../../services/ValidateForm'

import STATUS from '../../../../store/status';
import { saveFromModal, updateItem } from '../reducers/user';

function UserCreate({handleClose, model}) {

    const user = useSelector(state => state.admin.user)
    const status = useSelector(state => state.admin?.user?.status)

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        nombre: { value: model ? model.nombre : "", valid: !!model && model.nombre },
        apellido: { value: model ? model.apellido : "", valid: !!model && model.apellido },
        telefono: { value: model ? model.telefono : "", valid: !!model && model.telefono, required: false },
        email: { value: model ? model.email : "", valid: !!model && model.email },
        password: {},
        passwordConfirm: {},
    })

    ValidateForm.setForm = setForm;
    const getForm = () => {
        console.log("getForm", )
        return {
            "id_usuario": model && model.id_usuario ? model.id_usuario : null,
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
    return (
        <Container component="main" maxWidth="xs">
            <form sx={classes.form} noValidate>

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
                            value={form.nombre.value}
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
                            value={form.apellido.value}
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
                            value={form.email.value}
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
                            value={form.telefono.value}
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
                <div sx={classes.wrapper}>
                    {
                        status === STATUS.ERROR ? <Typography sx={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                    }
                    {status === STATUS.CRUD ? <CircularProgress /> : null}
                </div>
                <DialogActions>
                    <Button onClick={()=>{ handleClose(status)}} color="primary">
                        Cancelar</Button>
                    <Button
                        disabled={status === STATUS.CRUD || ValidateForm.hasError(form) || !passwordsMatch()}
                        onClick={() => {
                            if (model) {
                                dispatch(updateItem(getForm()))
                            } else {
                                dispatch(saveFromModal(getForm()))
                            }
                                
                        }} color="primary" >
                        Aceptar</Button>
                </DialogActions>
            </form>
        </Container>
    );
}

export default UserCreate;
