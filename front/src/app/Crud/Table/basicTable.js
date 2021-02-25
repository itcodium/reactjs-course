import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import styles from './basicTable.style';
import Edition from './edition';
import Modal from '../modal/modal';


function BasicTable(props) {
    let { columns } = props;
    const { data, action, status, classes } = props;
    const { onEdit, onDelete } = props;
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = React.useState(null);

    const handleClickOpen = (param) => {
        console.log('data: ', param);
        setItem(param);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (res) => {
        console.log('handleClick: ', res);
        if (res) {
            console.log('handleClose: ');
            //setOpen(false);
            handleClose();

        }

    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (action) {
            dispatch(action.get())
        }
    }, [])

    columns = columns.filter(col => {
        return col.visible;
    });

    if (!data || !data.length) {

        return null;
    }
    return (
        <div>
            {
                (status === "succeeded" || action) || (!action && data) ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {
                                        columns.map((row) => {
                                            return <TableCell className={row.type == "edit" ? classes.edition : classes.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
                                                {row.title}
                                            </TableCell>
                                        })
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map((data) => {
                                        return <TableRow key={data.name}>
                                            {
                                                columns.map((row) => {
                                                    return <Edition handleOpen={handleClickOpen}
                                                        row={row} data={data}></Edition>
                                                })
                                            }
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                        {status === "loading" ? <div className={classes.wrapper}> <LinearProgress className={classes.spinnerContainer} /> </div> : null}
                    </TableContainer>
                    : null
            }

            { status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{""}</Typography> : null}


            <Modal open={open} model={item} handleClose={handleClose} handleClick={handleClick}></Modal>
        </div>
    );
}

export default withStyles(styles)(BasicTable);