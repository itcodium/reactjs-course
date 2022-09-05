import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import STATUS from '../../store/status';

function BasicModal({ 
    open, 
    status,
    error, 
    title, 
    content, 
    handleClose 
}) {
    return (<Dialog
                open={open}
                onClose={()=>{
                    handleClose(status)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent sx={{p:2}}>
                    {status === STATUS.SUCCESS ? 
                    <Box sx={{ textAlign: 'center' }} >
                        <Typography color="green" variant="overline" display="block" gutterBottom>
                            Operacion realizada correctamente
                        </Typography> 
                        <Button onClick={()=>{ handleClose(status)}} color="primary">Aceptar</Button> 
                    </Box>
                    : content }
                    {
                     status === STATUS.ERROR ? <Typography color="red" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null
                    }
                </DialogContent>
            </Dialog>
    );
}

export default BasicModal;