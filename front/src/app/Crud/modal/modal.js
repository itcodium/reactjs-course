import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../App.styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(1),
    },
}));

function Modal(props) {
    const classes2 = useStyles();
    const { open, status, classes, error, title, content, handleClose, handleClick } = props;

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
                    {status !== "crud" && status !== "failed" ? content : null}
                    {status === "succeeded" ? handleClose() : null}
                    <div className={classes2.wrapper}>
                        {status === "crud" ? <CircularProgress /> : null}
                    </div>
                    {status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => {
                        handleClick(true);
                    }} color="primary" autoFocus>
                        Aceptar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default compose(
    withStyles(styles)
)(Modal);