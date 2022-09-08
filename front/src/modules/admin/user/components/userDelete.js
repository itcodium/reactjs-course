
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch  } from 'react-redux'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './user.style.js';
import { removeItem } from '../reducers/user';
import { STATUS } from '../../../../App.exports';

function UserDelete({model, handleClose}) {
    const user = useSelector(state => state.admin.user);
    const status = useSelector(state => state.admin.user?.status)
    const dispatch = useDispatch();
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el usuario  {model.id_usuario}
            </Typography>
            <Grid>
                <div sx={classes.wrapper}>
                    {status === STATUS.LOADING ? <CircularProgress /> : null}
                </div>
                {
                    status === STATUS.ERROR ? <Typography sx={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                }
            </Grid>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar</Button>
                <Button
                    onClick={() => {
                        console.log("model", model)
                        dispatch(removeItem(model));
                    }} color="primary" >
                    Aceptar</Button>

            </DialogActions>
      </Container>
    );
}

export default UserDelete;