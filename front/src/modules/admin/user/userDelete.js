import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function UserDelete(props) {
    const { model, status, error, classes, close } = props;
    return (
        <Grid item xs={12}>
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el usuario  {model.id_usuario}
            </Typography>

        </Grid>
    );
}

export default UserDelete;


/*
 <form noValidate>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary"
                        disabled={status === "loading"} // || ValidateForm.hasError(form) || !passwordsMatch()
                        onClick={() => {
                            dispatch(USER.delete(model.id))
                        }}
                    >Aceptar</Button>
                    {
                        status === "failed" ? <Typography variant="overline" display="block" gutterBottom>{"user.error.message"}</Typography> : null
                        // className={classes.error}
                    }
                </Grid>
            </form>
*/