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

import { withStyles } from '@material-ui/core/styles';
import styles from './basicTable.style';
import Edition from './edition';
import ModalBasic from '../modal/modal';


function BasicTable(props) {
    let { columns } = props;
    const { data, error, action, status, classes, helper, contentEdit } = props;
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(false);
    const [model, setModel] = React.useState(null);
    const [click, setClick] = React.useState("");
    const [modalTitle, setModalTitle] = React.useState(null);

    const handleClickOpen = (data, action) => {

        helper.setModel(data);

        if (action == 'DELETE') {
            setModalContent(helper.delete());
            setModalTitle(helper.deleteTitle())
        }

        if (action == 'PUT') {
            setModalContent(helper.update());
            setModalTitle(helper.title())
        }
        setClick(action);
        setModel(data);
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        dispatch(action.init());
    };
    const dispatch = useDispatch();
    const handleDelete = (res) => {
        dispatch(action.remove(model));
    };

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
            <h2>status : {open ? "true" : "false"} - {status}</h2>

            {(status === "succeeded" || action) || (!action && data) ?
                < TableContainer component={Paper}>

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
                    {status === "loading" ? <div className={classes.wrapper}> <LinearProgress className={classes.spinnerContainer} /> </div> : null}
                </TableContainer>
                : null
            }

            <ModalBasic
                title={modalTitle}
                content={modalContent}
                open={open}
                model={model}
                status={status}
                error={error}
                classes={classes}
                handleClose={handleClose}
                handleClick={click == 'DELETE' ? handleDelete : null}>
            </ModalBasic>
        </div >
    );
}

export default withStyles(styles)(BasicTable);


/*



*/