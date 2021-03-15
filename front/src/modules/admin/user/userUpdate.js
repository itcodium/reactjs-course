import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './user.style.js';
import ValidateForm from '../../../services/validateForm'
import USER from '../../../redux/actions/user'

function UserUpdate(props) {
    const { classes, handleClose, model } = props;

    const user = useSelector(state => state.user);
    const status = useSelector(state => state.user.status);
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

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            id="vigencia_desde"
                            format="yyyy/MM/dd"
                            label="Vigencia desde"
                            type="date"
                            defaultValue={form.vigencia_desde.value}
                            className={classes.textField}
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
                <div className={classes.wrapper}>
                    {
                        status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                    }
                    {status === "crud" ? <CircularProgress /> : null}
                </div>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar</Button>
                    <Button
                        disabled={status === "crud" || ValidateForm.hasError(form)}
                        onClick={() => {
                            dispatch(USER.update(getForm()))
                        }} color="primary" >
                        Aceptar</Button>
                </DialogActions>
            </form>
        </Container>
    );
}

export default withStyles(styles)(UserUpdate);
