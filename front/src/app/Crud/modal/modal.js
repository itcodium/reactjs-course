import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
    const { open, model, content, handleClose, handleClick } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{model ? model.usuario : "none"}</DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={() => {
                        handleClick(true);
                    }} color="primary" autoFocus>
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
