import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './menu.style.js';
import ValidateForm from '../../../../services/ValidateForm';
// import MENU from '../../../redux/actions/menu';
import {addChild, addSameLevel, update } from '../reducers/menu';
import STATUS from '../../../../store/status';

function MenuCreate({ handleClose, model, id, type } ) {
    

    const menu = useSelector(state => state.admin.menu);
    const status = useSelector(state => state.admin.menu.status);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: { value: model ? model.title : "", valid: !!(model && model.title) },
        url: { value: model ? model.url : "", valid: !!(model && model.url) },
        icon: { value: model ? model.icon : "", valid: true },
        action: { value: model ? model.action : "", valid: true },
    })

    ValidateForm.setForm = setForm;
    const getForm = () => {
        let node = {
            "title": form.title.value,
            "url": form.url.value,
            "icon": form.icon.value,
            "action": form.action.value,
        }
        if (id && type === "CHILD") {
            node.id_menu = id;
        } else {
            node.id_menu = model && model.id_menu ? model.id_menu : null;
        }
        return node;
    }

    return (
        <Container component="main" maxWidth="xs">
            <form className={classes.form} noValidate>
                <Grid sx={classes.root} container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            value={form.title.value}
                            error={form.title.invalid}
                            helperText={form.title.message}
                            onChange={ValidateForm.handleChange}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="url"
                            label="Path"
                            name="url"
                            value={form.url.value}
                            error={form.url.invalid}
                            helperText={form.url.message}
                            type="text"
                            onChange={ValidateForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="action"
                            label="Action"
                            name="action"
                            value={form.action.value}
                            helperText={form.action.message}
                            type="text"
                            onChange={ValidateForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="icon"
                            label="icon"
                            name="icon"
                            value={form.icon.value}
                            helperText={form.icon.message}
                            type="text"
                            onChange={ValidateForm.handleChange}
                        />
                    </Grid>


                </Grid>
                <div >
                    {
                        status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{menu.error.message}</Typography> : null
                    }
                    {status === STATUS.CRUD ? <CircularProgress /> : null}
                </div>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar</Button>
                    <Button
                        disabled={status === STATUS.CRUD || ValidateForm.hasError(form)}
                        onClick={() => {
                            if (type === "CHILD") {
                                dispatch(addChild(getForm()))
                            }
                            if (type === "SAME_LEVEL") {
                                dispatch(addSameLevel(getForm()))
                            }
                            if (type === "PUT") {
                                dispatch(update(getForm()))
                            }
                        }} color="primary" >
                        Aceptar</Button> 

                </DialogActions>
            </form>
        </Container>
    );
}

export default MenuCreate;
