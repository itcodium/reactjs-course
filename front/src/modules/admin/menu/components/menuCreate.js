import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './menu.style.js';
import ValidateForm from '../../../services/validateForm'
import MENU from '../../../redux/actions/menu'
import STATUS from '../../../redux/constants/status'

function MenuCreate(props) {
    const { classes, handleClose, model, id, type } = props;

    const menu = useSelector(state => state.menu);
    const status = useSelector(state => state.menu.status);
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
        if (id && type == "CHILD") {
            node.id_menu = id;
        } else {
            node.id_menu = model && model.id_menu ? model.id_menu : null;
        }
        return node;
    }

    return (
        <Container component="main" maxWidth="xs">
            <form className={classes.form} noValidate>
                <Grid className={classes.root} container spacing={2}>
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
                            if (type == "CHILD") {
                                dispatch(MENU.addChild(getForm()))
                            }
                            if (type == "SAME_LEVEL") {
                                dispatch(MENU.addSameLevel(getForm()))
                            }
                            if (type == "PUT") {
                                dispatch(MENU.update(getForm()))
                            }
                        }} color="primary" >
                        Aceptar</Button>

                </DialogActions>
            </form>
        </Container>
    );
}

export default withStyles(styles)(MenuCreate);
