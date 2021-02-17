import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCellHeader: {
        fontWeight: "bold"

    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
    const classes = useStyles();
    const { data } = props;
    const { columns } = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((row) => {
                                if (row.visible) {
                                    return <TableCell className={classes.tableCellHeader} align={row.align ? row.align : "left"} component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                }
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
                                        if (row.visible) {
                                            return <TableCell align={row.align ? row.align : "left"} component="th" scope="row">
                                                {data[row.field]}
                                            </TableCell>
                                        }

                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
