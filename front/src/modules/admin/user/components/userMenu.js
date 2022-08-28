import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './user.style.js';

import USER from '../../../redux/actions/user'
function UserMenu({model, handleClose}) {
    const user = useSelector(state => state.user);
    const status = useSelector(state => state.user.status);
    const dispatch = useDispatch();
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el usuario  {model.id_usuario}
            </Typography>
            <Grid>
                <div sx={classes.wrapper}>
                    {status === "crud" ? <CircularProgress /> : null}
                </div>
                {
                    status === "failed" ? <Typography sx={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                }
            </Grid>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar</Button>
                <Button
                    onClick={() => {
                        dispatch(USER.remove(model))
                    }} color="primary" >
                    Aceptar</Button>

            </DialogActions>
        </Container>
    );
}

export default UserMenu;