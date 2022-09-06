import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './menu.style.js';
import STATUS from '../../../../store/status';
import {remove } from '../reducers/menu';

function MenuDelete({ model, handleClose }) {
    const menu = useSelector(state => state.admin.menu);
    const status = useSelector(state => state.admin.menu.status);
    const dispatch = useDispatch();
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el nodo: <b>  {model.title}</b>
            </Typography>
            <Grid>
                <div className={classes.root}>
                    {status === STATUS.LOADING ? <CircularProgress /> : null}
                </div>
                {
                    status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{menu.error.message}</Typography> : null
                }
            </Grid>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar</Button>
                <Button
                    onClick={() => {
                        dispatch(remove(model))
                    }} color="primary" >
                    Aceptar</Button>

            </DialogActions>
        </Container>
    );
}

export default MenuDelete;