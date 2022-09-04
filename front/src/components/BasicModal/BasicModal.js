import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function BasicModal({ 
    open, 
    status, 
    title, 
    content, 
    handleClose 
}) {
    console.log({ 
        open, 
        status, 
        title, 
        content, 
        handleClose,
    })
    return (<Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {content}
                    {status === "succeeded" ? handleClose() : null}
                </DialogContent>

            </Dialog>
    );
}

//

export default BasicModal;