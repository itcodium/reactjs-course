import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './user.style.js';
import ValidateForm from '../../../../services/ValidateForm'
import { updateItem } from '../reducers/user';
import STATUS from '../../../../store/status';

function UserUpdate({ handleClose, model } ) {
    const status = useSelector(state => state.admin.user?.status)
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        nombre: { value: model.nombre, valid: true },
        apellido: { value: model.apellido, valid: true },
        telefono: { value: model.telefono, valid: true, required: false },
        email: { value: model.email, valid: true },
        vigencia_desde: { value: model.vigencia_desde, valid: true },
        vigencia_hasta: { value: model.vigencia_hasta, valid: true },
    })

    ValidateForm.setForm = setForm;
    const getForm = () => {
        return {
            "id_usuario": model.id_usuario,
            "nombre": form.nombre.value,
            "apellido": form.apellido.value,
            "telefono": form.telefono.value,
            "vigencia_desde": form.vigencia_desde.value,
            "vigencia_hasta": form.vigencia_hasta.value,
            "email": form.email.value,
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <form sx={styles.form} noValidate>
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
                            disabled
                            value={form.email.value}
                            error={form.email.invalid}
                            helperText={form.email.message}
                            type="email"
                            autoComplete="email"
                            onChange={ValidateForm.handleChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            id="vigencia_desde"
                            format="yyyy/MM/dd"
                            label="Vigencia desde"
                            type="date"
                            defaultValue={form.vigencia_desde.value}
                            sx={styles.textField}
                            onChange={ValidateForm.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            id="vigencia_hasta"
                            format="yyyy/MM/dd"
                            label="Vigencia hasta"
                            type="date"
                            defaultValue={form.vigencia_hasta.value}
                            onChange={ValidateForm.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <div sx={styles.wrapper}>
                    {
                        status === STATUS.ERROR ? <Typography sx={styles.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                    }
                    {   status === STATUS.CRUD ? <CircularProgress /> : null}
                </div>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar</Button>
                    <Button
                        disabled={status === STATUS.CRUD || ValidateForm.hasError(form)}
                        onClick={() => {
                            dispatch(updateItem(getForm()))
                        }} color="primary" >
                        Aceptar</Button>
                </DialogActions>
            </form>
        </Container>
    );
}

export default UserUpdate;
