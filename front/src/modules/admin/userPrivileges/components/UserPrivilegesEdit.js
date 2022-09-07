
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch  } from 'react-redux'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {fetchByUser, changeUserPrivilege  } from '../reducers/userPrivileges';
import Menu from '../../menu/components/Menu'
/*
import CircularProgress from '@mui/material/CircularProgress';
import classes from './user.style.js';
import { removeItem } from '../reducers/user';
import STATUS from '../../../../store/status';*/

function UserPrivilegesEdit({model, handleClose}) {
    const userPrivileges = useSelector(state => state.admin.userPrivileges);
    const status = useSelector(state => state.admin.user?.status)
    console.log("userPrivileges", userPrivileges);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchByUser(model))
    }, [])
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="p" variant="subtitle1">
                Desea Eliminar el usuario  {model?.id_usuario}
            </Typography>
            <Grid>
               <Menu 
                user={model} 
                privileges={true} 
                hideTitle={true} 
                hideEdition={true} 
               ></Menu>
            </Grid>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Aceptar</Button>
            </DialogActions>
      </Container>
    );
}

export default UserPrivilegesEdit;