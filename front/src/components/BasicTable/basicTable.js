import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead  from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import styles from './basicTable.style';
import Edition from './edition';
import BasicModal from '../BasicModal/basicModal';


function BasicTable(
    columns,
    data, 
    action, 
    status, 
    helper, 
    title 
) {
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
            <Card sx={styles.title}>
                <CardHeader
                    action={helper.create() ?
                        <IconButton onClick={() => {
                            handleClickOpen('POST');
                        }} aria-label="Add">
                            <AddIcon ></AddIcon>
                        </IconButton> : null
                    }
                    title={title}
                />
            </Card>
            {(status === "succeeded" || action) || (!action && data) ?
                < TableContainer component={Paper}>
                    {status === "loading" ? <div sx={styles.wrapper}> <LinearProgress sx={styles.spinnerContainer} /> </div> : null}
                    <Table sx={styles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((row) => {
                                    return <TableCell sx={row.type == "edit" ? styles.edition : styles.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
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
                                            edit={helper.update()}
                                            itemDelete={helper.delete()}
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

export default BasicTable;