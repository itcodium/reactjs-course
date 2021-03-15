import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
import styles from './menu.style';
import { NavLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';

function Menu(props) {
    const { classes } = props;
    const { menu } = useSelector(state => state.menu)

    const preventDefault = (event) => event.preventDefault();
    const getSubList = (menu) => {
        return <ul>{
            menu.items.map((sub, indexSub) => (
                <li className={classes.item} key={indexSub}>
                    {getLink(sub)}
                </li>
            ))}
        </ul>
    }

    const getLink = (menu, index) => {
        {/* */ }
        if (menu.url) {
            return <li className={classes.item} key={index}>
                <a href={"#" + menu.url} className={classes.red}>{menu.title}</a>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>

                {getSubList(menu)}
            </li>
        } else {
            return <li className={classes.item} key={index}>
                <span className={classes.green}>
                    {menu.title}
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </span>
                {menu.items.length ? getSubList(menu) : null}
            </li>
        }
    }

    /*
            <Collapse in={true} timeout="auto" unmountOnExit>

 
        </Collapse>
    <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
     */

    return (
        <div>

            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="h4" gutterBottom>Menu</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => { alert("22 + 22") }} aria-label="Add">
                            <AddIcon ></AddIcon>
                        </IconButton>
                    </Grid>

                </Grid>
            </Paper>
            <br></br>
            <Paper className={classes.paper}>
                <ul >{menu.map((sub, index) =>
                    <li className={classes.item} key={index}>
                        {getLink(sub, index)}</li>
                )}</ul>
            </Paper>
        </div>
    );
}


export default withStyles(styles)(Menu);