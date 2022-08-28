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
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={"md"}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {content}
                    {status === "succeeded" ? handleClose() : null}
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default BasicModal;