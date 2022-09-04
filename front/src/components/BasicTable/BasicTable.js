import React
 , { useEffect } 
from 'react';
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

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


import styles from './BasicTable.style';
import Edition from './Edition';
import BasicModal from '../BasicModal/BasicModal';
import Button from '@mui/material/Button';

function BasicTable({
        columns,
        data, 
        action, 
        status, 
        helper, 
        title 
    }
) {
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const [modalTitle, setModalTitle] = React.useState('');
    
    console.log("test", open)
    const handleClickOpen = (method, data) => {
        // dispatch(action.init());
        console.log("handleClickOpen", method, data);
        setOpen(true);
        
        if (method === 'POST') {
            setModalContent(helper.create(handleClose));
            setModalTitle(helper.title())
        }
        /*
        if (method === 'DELETE') {
            helper.setModel(data);
            setModalContent(helper.delete(handleClose));
            setModalTitle(helper.deleteTitle())
        }
        if (method === 'PUT') {
            helper.setModel(data);
            setModalContent(helper.update(handleClose));
            setModalTitle(helper.title())
        }
        */
        
    };
    const dispatch = useDispatch();
    const handleClose = () => {
        // dispatch(action.init());
        setOpen(false);
    };

    /**/

    useEffect(() => {
        console.log("HELPER: ", data)
        console.log("action", action)
        if (action) {
            dispatch(action.get())
        }
    }, [])
    
    columns = columns?.length && columns.filter(col => {
        return col.visible;
    });

    return <>
    <Button variant="outlined" onClick={()=>{
        handleClickOpen('POST');
    }}>
        Open simple dialog
      </Button>

      <Card sx={styles.title}>
                <CardHeader
                    action={
                        <IconButton onClick={() => {
                            handleClickOpen('POST');
                        }} aria-label="Add">
                            <AddIcon ></AddIcon>
                        </IconButton> 
                    }
                    title={ open ? title + 'Open' : ''}
                />
            </Card>
            {(status === "succeeded" || action) || (!action && data) ?
                < TableContainer component={Paper}>
                    {status === "loading" ? <div sx={styles.wrapper}> <LinearProgress sx={styles.spinnerContainer} /> </div> : null}
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
                                        return <Edition key={"ir"+dri+ir} handleOpen={handleClickOpen}
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
                        content = {modalContent}
                        title = {modalTitle}>
                </BasicModal>

        </>
}

/*

  
*/

export default BasicTable;
 
// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjIyNTI1ODYsImV4cCI6MTY2MjI1Mjg4NiwiaXNzIjoiZXhhbXBsZS5vcmciLCJhdWQiOiI2NTQyMDRjYjAwYzYwZGU3YWQwN2NlODBkZGY3NjJiZjExN2IyNTNhIiwiZGF0YSI6eyJpZF91c3VhcmlvIjoyLCJ1c3VhcmlvIjoicC5oYWRkYWQucEBnbWFpbC5jb20iLCJub21icmUiOiJwLmhhZGRhZC5wQGdtYWlsLmNvbSIsImFwZWxsaWRvIjoiU2lzdGVtYSIsImVtYWlsIjoicC5oYWRkYWQucEBnbWFpbC5jb20iLCJsYW5nIjoiRVMiLCJpZF9wZXJmaWwiOjF9fQ.hztDhDbwlk3cx-MyP7TTxqnWToekT9_rxPrQyucPC2OvJqj8AObsIiAAR_29VFryB5xVxXqBqbQZc9TwCvu9CyKDehF-X4BFGxn2wYLVANFOhC4oUdLfo0F4EXZmm9xoJOWVxgAuybZ0EWZwXr0ch1JCHR_iskKmYnltiHqTCcszPSf5IF_OXZiuNTrPD5yintZqDfcpAitI6CK3KnDRQg_2T6E98Yih6Fq6SGC96jum4XoAS5CZgXUu6DNsua4m7tS15X6hKm1Eqi_qkRKTuZJBSSc4Y2NDQ_a8qZwSs5_ID7-FZG8bgAZ7vsVE9UrlA0dq7UCne3sdA6MwikePF_28pFezYT1tZc8SGVr9kD_umL-9ACNC9k1WE_kGT-UMSOJEmOnE0oZZocLmCqPZZdGw-pLU4NXzyH3NrkEu0lsR9dSUMnhYdErKNvN7EgzGLhjbZq9ON8aw50239RznKyp52eI_APyLfVuwUbvMzvCRyd72OdJayHeNyTE3leOpVnZ0bulUTB4NC8xf7afH-Tf9c8LQFFAKMGgKUC1kdke1AOtpSVyS-w3_p4QQy77mHiWCNKSiVQsy2olHuQ2yvdGZcZByM9OMOKvw82-YVDA0j2BTRZKHthT6f1EVyBgbF2y9aazfdeSpd4D-DLSnjkEbnP82gu9ySm7h9fJvyNs

