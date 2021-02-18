import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCellHeader: {
        fontWeight: "bold"

    }
});

export default function BasicTable(props) {
    const classes = useStyles();
    const { data } = props;
    let { columns } = props;
    const { action } = props;
    const { status } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('data: ', data);
        if (action) {
            dispatch(action.get())
        }
    }, [])

    columns = columns.filter(col => {
        return col.visible;
    });

    if (!data) {
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
                                            return <TableCell className={classes.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
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
                                                    return <TableCell align={row.align ? row.align : "left"} component="th" scope="row">
                                                        {data[row.field]}
                                                    </TableCell>
                                                })
                                            }
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : null
            }
            { status === "loading" ? <div className={classes.wrapper}><CircularProgress className={classes.spinnerContainer} /> </div> : null}
            { status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{""}</Typography> : null}
        </div>
    );
}
