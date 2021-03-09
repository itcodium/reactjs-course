import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
/*
import BasicTable from '../../../app/Crud/Table/basicTable';
import USER from '../../../redux/actions/user';
import Typography from '@material-ui/core/Typography';
import Footer from '../../../app/Footer/Footer';
import LanguageSelector from '../../../app/LanguageSelector/LanguageSelector';
*/



function UserCreate(props) {
    const { model } = props;
    const columns = [
        { field: 'id_usuario', title: 'Id', align: "left", visible: true },
        { field: 'usuario', title: 'User', align: "left", visible: true },
        { field: 'nombre', title: 'Name', align: "left", visible: true },
        { field: 'apellido', title: 'Last Name', align: "left", visible: true },
        { field: 'email', title: 'Email', align: "left", visible: true },
        { field: 'vigencia_desde', title: 'From', align: "center", visible: true },
        { field: 'vigencia_hasta', title: 'To', align: "center", visible: true },
        { field: 'creado_por', title: 'Created By', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit', buttons: { delete: true, edit: true } },
    ];
    const status = useSelector(state => state.user.status)
    const users = useSelector(state => state.user.users)

    return (
        <Grid item xs={12}>
            <Typography component="p" variant="subtitle1">
                {model.usuario}
            </Typography>
        </Grid>
    );
}

export default UserCreate;

/*
               <CssBaseline />
               <div className={classes.paper}>
                   <Typography component="h1" variant="h5">
                       Sign up
                   </Typography>
                   <form className={classes.form} noValidate>
                       <Grid className={classes.actions} item xs={12}>
                           <Button variant="contained" color="primary"
                               disabled={status === "loading" || ValidateForm.hasError(form) || !passwordsMatch()}
                               onClick={() => {
                                   dispatch(USER.save(getUser()))
                               }}
                           >Aceptar</Button>
                           {
                               status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{user.error.message}</Typography> : null
                           }
                       </Grid>
                   </form>
               </div>
               */