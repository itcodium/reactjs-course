import React, { useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Edition(props) {
    const { row, data, handleOpen, edit, itemDelete } = props;
    if (row.type == "edit") {
        return <TableCell align={row.align ? row.align : "left"} component="th" scope="row">
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
        return <TableCell align={row.align ? row.align : "left"} component="th" scope="row">
            {data[row.field]}
        </TableCell>

    }
}
export default Edition;