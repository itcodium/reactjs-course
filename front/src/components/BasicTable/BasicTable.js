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

import styles from './BasicTable.style';
import Edition from './Edition';
import BasicModal from '../BasicModal/BasicModal';

import STATUS from '../../store/status';

function BasicTable({
        columns,
        action, 
        payload,
        helper, 
        title 
    }
) {
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const [modalTitle, setModalTitle] = React.useState('');
    const { data, status, error} = payload;

    const handleClickOpen = (method, params) => {
        dispatch(action.resetStatus());
        setOpen(true);
        
        if (method === 'POST') {
            setModalContent(helper.create(handleClose));
            setModalTitle(helper.title())
        }
        
        if (method === 'DELETE') {
            helper.setModel(params);
            setModalContent(helper.delete(handleClose));
            setModalTitle(helper.deleteTitle())
        }

        if (method === 'PUT') {
            helper.setModel(params);
            setModalContent(helper.update(handleClose));
            setModalTitle(helper.title())
        }
        
    };
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (action) {
            console.log("action", action)
            dispatch(action.get())
        }
    }, [])
    
    columns = columns?.length && columns.filter(col => {
        return col.visible;
    });

    return <>
      <Card sx={styles.title}>
                <CardHeader
                    action={
                        <IconButton onClick={() => {
                            handleClickOpen('POST');
                        }} aria-label="Add">
                            <AddIcon ></AddIcon>
                        </IconButton> 
                    }
                    title={ title }
                />
            </Card>
            {(status === STATUS.SUCCESS || action) || (!action && data) ?
                < TableContainer component={Paper}>
                    {status === STATUS.LOADING ? <div sx={styles.wrapper}> <LinearProgress sx={styles.spinnerContainer} /> </div> : null}
                    <Table sx={styles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns?.map((row, i) => {
                                    return <TableCell key={"r"+i} sx={row.type === "edit" ? styles.edition : styles.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { data?.length >=0  && data.map((drow, dri) => {
                                return <TableRow key={"tr"+dri}>
                                    {columns.map((col, ir) => {
                                        return <Edition key={"ir"+dri+ir} 
                                            handleOpen={handleClickOpen}
                                            row={col}
                                            edit={helper.update()}
                                            itemDelete={helper.delete()}
                                            data={drow}></Edition>
                                    })}
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                : null
            }
            {/* El status cierra la modal si es igual a success */}
                <BasicModal
                    open={open}
                    handleClose={handleClose}
                    status = {status}
                    error = {error}
                        content = {modalContent}
                        title = {modalTitle}>
                </BasicModal>

        </>
}

export default BasicTable;
 