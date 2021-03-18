import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../App.styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(1),
    },
}));

function BasicModal(props) {
    const classes2 = useStyles();
    const { open, status, title, content, handleClose } = props;
    const close = () => {
        handleClose();
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {content}
                    {status === "succeeded" ? close() : null}
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default compose(
    withStyles(styles)
)(BasicModal);