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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import styles from './basicTable.style';
import Edition from './edition';
import BasicModal from '../BasicModal/basicModal';


function BasicTable(props) {
    let { columns } = props;
    const { data, action, status, classes, helper } = props;
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState(null);

    const handleClickOpen = (method, data) => {
        dispatch(action.init());
        helper.setModel(data);

        if (method == 'POST') {
            setModalContent(helper.create(handleClose));
            setModalTitle(helper.title())
        }
        if (method == 'DELETE') {
            setModalContent(helper.delete(handleClose));
            setModalTitle(helper.deleteTitle())
        }
        if (method == 'PUT') {
            setModalContent(helper.update(handleClose));
            setModalTitle(helper.title())
        }
        setOpen(true);
    };

    const handleClose = () => {
        dispatch(action.init());
        setOpen(false);
    };

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
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                            status : {open ? "true" : "false"} - {status}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => {
                            handleClickOpen('POST');
                        }} aria-label="Add">
                            <AddIcon ></AddIcon>
                        </IconButton>
                    </Grid>

                </Grid>
            </Paper>
            {(status === "succeeded" || action) || (!action && data) ?
                < TableContainer component={Paper}>
                    {status === "loading" ? <div className={classes.wrapper}> <LinearProgress className={classes.spinnerContainer} /> </div> : null}
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((row) => {
                                    return <TableCell className={row.type == "edit" ? classes.edition : classes.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((data) => {
                                return <TableRow key={data.name}>
                                    {columns.map((row) => {
                                        return <Edition handleOpen={handleClickOpen}
                                            row={row}
                                            data={data}></Edition>
                                    })}
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                : null
            }
            {open ?
                <BasicModal
                    open={open}
                    status={status}
                    title={modalTitle}
                    content={modalContent}
                    handleClose={handleClose}>
                </BasicModal>
                : null
            }
        </div >
    );
}

export default withStyles(styles)(BasicTable);