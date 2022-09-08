import React from 'react';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Edition({
    row,
    data,
    handleOpen,
    edit,
    itemDelete
}) {
    if (row.type === "edit") {
        return <TableCell align={row.align ? row.align : "left"} scope="row">
            {row.buttons.delete && itemDelete ?
                <IconButton onClick={() => {
                    handleOpen('DELETE', data)
                }} size="small" aria-label="delete">
                    <DeleteIcon fontSize="small" />
                </IconButton> : null
            }
            {row.buttons.edit && edit ?
                <IconButton onClick={() => {
                    handleOpen('PUT', data)
                }} size="small" aria-label="edit">
                    <EditIcon fontSize="small" />
                </IconButton> : null
            }
        </TableCell>
    } else {
        return <TableCell align={row.align ? row.align : "left"} scope="row">
            {data[row.field]}
        </TableCell>

    }
}
export default Edition;