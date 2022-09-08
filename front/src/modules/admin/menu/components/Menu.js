import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
//import Checkbox from '@mui/material/Checkbox';
//import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {STATUS} from '../../../../App.exports';
import classes from './menu.style';
import { BasicModal } from '../../../../components/index';
import {fetchMenu, resetStatus  } from '../reducers/menu';
import { CheckPrivileges  } from '../../index';
import MenuCreate from './MenuCreate';
import MenuDelete from './MenuDelete';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Menu({ hideEdition, hideTitle, privileges, user}) {
    const dispatch = useDispatch();
    const status = useSelector(state => state.admin.menu.status)
    const menu = useSelector(state => privileges ? state.admin.userPrivileges.data : state.admin.menu.data)

    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(null);

    useEffect(() => {
        if (!privileges) {
            dispatch(fetchMenu())
        } 
    }, [])

    const handleClickOpen = (method, data) => {
        dispatch(resetStatus());
        if (method === 'ADD_SAME_LEVEL' && !hideEdition) {
            setContent(<MenuCreate type={"SAME_LEVEL"} handleClose={handleClose}></MenuCreate>)
        }
        if (method === 'ADD_CHILD' && !hideEdition) {
            setContent(<MenuCreate type={"CHILD"} id={data.id_menu} handleClose={handleClose}></MenuCreate>)
        }
        if (method === 'PUT' && !hideEdition) {
            setContent(<MenuCreate type={"PUT"} model={data} handleClose={handleClose}></MenuCreate>)
        }
        if (method === 'DELETE' && !hideEdition) {
            setContent(<MenuDelete model={data} handleClose={handleClose}></MenuDelete>)
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getSubList = (menu) => {
        return <List sx={classes.nested} dense={true}>
        {
            menu.items.map((sub, indexSub) => {
                return getLink(sub, indexSub)
            })}
        </List>
    }
    const getEdition = (menu) => {

        if (hideEdition) {
            return <div className={classes.edition}></div>;
        }
        return <span>
            <IconButton sx={{ml:1}} edge="end" aria-label="delete" onClick={() => {
                handleClickOpen("DELETE", menu);
            }}>
                <DeleteIcon />
            </IconButton>
            <IconButton sx={{ml:1}} edge="end" aria-label="edit" onClick={() => {
                handleClickOpen("PUT", menu);
            }}>
                <EditIcon />
            </IconButton>
            <IconButton sx={{ml:1}} edge="end" aria-label="Add" onClick={() => {
                handleClickOpen("ADD_CHILD", menu);
            }}>
                <AddIcon />
            </IconButton>
        </span>
    }

    const getCheckPrivileges = (menu) => {
        if (privileges) {
            return <CheckPrivileges user={user} menu={menu}></CheckPrivileges>
        }
        else {
            return <Typography component="a"
                variant="a"
                color="inherit">
                {menu.title}
                {getEdition(menu)}
            </Typography>
        }
    }

    const getLink = (menu, index) => {
        return  <ListItem sx={classes.item} key={index}>
                    { getCheckPrivileges(menu) }
                    { menu.items?.length ? getSubList(menu) : null }
                </ListItem>
    }

    return (
        <div>
            {!hideTitle ?
                <Card sx={classes.root}>
                    <CardHeader
                        action={
                            <IconButton
                                onClick={() => {
                                    handleClickOpen("ADD_SAME_LEVEL");
                                }} aria-label="settings">
                                <AddIcon />
                            </IconButton>
                        }
                        title="Menu"
                    />
                </Card> : null
            }
            {
                (status === STATUS.SUCCESS && Array.isArray(menu)) || Array.isArray(menu) ?
                    <List sx={classes.item} dense={true}>
                        { menu.map((sub, index) =>
                         getLink(sub, index)
                        )}
                    </List>
                    : null
            }
            {
                status === STATUS.LOADING ?
                    <Box sx={classes.wrapper}><CircularProgress sx={classes.spinnerContainer} /> </Box>
                    : null
            }
            {open ?
                <BasicModal
                    open={open}
                    status={status}
                    title={"Add Nodes"}
                    content={content}
                    handleClose={handleClose}>
                </BasicModal>
                : null
            }
        </div>
    );
}


export default Menu;