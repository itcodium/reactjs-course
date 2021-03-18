import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './menu.style.js';
import STATUS from '../../../redux/constants/status'
import MENU from '../../../redux/actions/menu'
function MenuDelete(props) {
    const { model, handleClose, classes } = props;
    const menu = useSelector(state => state.menu);
    const status = useSelector(state => state.menu.status);
    const dispatch = useDispatch();
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el nodo: <b>  {model.title}</b>
            </Typography>
            <Grid>
                <div className={classes.root}>
                    {status === STATUS.PENDING ? <CircularProgress /> : null}
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
                        dispatch(MENU.remove(model))
                    }} color="primary" >
                    Aceptar</Button>

            </DialogActions>
        </Container>
    );
}

export default withStyles(styles)(MenuDelete);