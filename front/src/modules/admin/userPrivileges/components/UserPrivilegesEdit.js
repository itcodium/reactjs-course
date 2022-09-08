
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { fetchByUser } from '../reducers/userPrivileges';
import Menu from '../../menu/components/Menu'

function UserPrivilegesEdit({ model, handleClose }) {
    const error = useSelector(state => state.admin.userPrivileges.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchByUser(model))
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            {error ? <Typography color="red" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}
            <Menu
                user={model}
                privileges={true}
                hideTitle={true}
                hideEdition={true}
            ></Menu>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Aceptar</Button>
            </DialogActions>
        </Container>
    );
}

export default UserPrivilegesEdit;