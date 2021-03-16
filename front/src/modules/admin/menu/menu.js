import React from 'react';
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import styles from './menu.style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
function Menu(props) {
    const { classes } = props;
    const { menu } = useSelector(state => state.menu)
    const getSubList = (menu) => {
        return <ul className={classes.nested}>{
            menu.items.map((sub, indexSub) => (
                getLink(sub)
            ))}
        </ul>
    }

    const getLink = (menu, index) => {
        if (menu.url) {
            return <li className={classes.item} key={index}>
                <Typography component="a"
                    variant="a"
                    color="inherit">
                    {menu.title}
                    <span className={classes.edition}>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </span>
                </Typography>
                {menu.items.length ? getSubList(menu) : null}
            </li>
        } else {
            return <li className={classes.item} key={index}>

                <Typography component="a"
                    variant="a"
                    color="inherit">
                    {menu.title}
                    <span className={classes.edition}>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </span>
                </Typography>
                {menu.items.length ? getSubList(menu) : null}
            </li>
        }
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton onClick={() => { alert("22 + 22") }} aria-label="settings">
                            <AddIcon />
                        </IconButton>
                    }
                    title="Menu"
                />
            </Card>

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