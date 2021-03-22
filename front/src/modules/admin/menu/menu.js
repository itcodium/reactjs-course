import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import MENU from '../../../redux/actions/menu';
import STATUS from '../../../redux/constants/status';
import styles from './menu.style';
import BasicModal from '../../../app/BasicModal/basicModal';
import MenuCreate from './menuCreate';
import MenuDelete from './menuDelete';

function Menu(props) {
    const { classes, hideEdition, hideTitle, privileges, user } = props;
    const dispatch = useDispatch();

    const status = useSelector(state => state.menu.status)
    const menu = useSelector(state => privileges ? state.menu.menuUserPrivileges : state.menu.menu)


    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(null);

    useEffect(() => {
        if (privileges) {
            dispatch(MENU.getByUser(user))
        } else {
            dispatch(MENU.getFull())
        }
    }, [])

    const handleClickOpen = (method, data) => {
        dispatch(MENU.init());
        if (method == 'ADD_SAME_LEVEL' && !hideEdition) {
            setContent(<MenuCreate type={"SAME_LEVEL"} handleClose={handleClose}></MenuCreate>)
        }
        if (method == 'ADD_CHILD' && !hideEdition) {
            setContent(<MenuCreate type={"CHILD"} id={data.id_menu} handleClose={handleClose}></MenuCreate>)
        }
        if (method == 'PUT' && !hideEdition) {
            setContent(<MenuCreate type={"PUT"} model={data} handleClose={handleClose}></MenuCreate>)
        }
        if (method == 'DELETE' && !hideEdition) {
            setContent(<MenuDelete model={data} handleClose={handleClose}></MenuDelete>)
        }

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const getSubList = (menu) => {
        return <ul className={classes.nested}>{
            menu.items.map((sub, indexSub) => (
                getLink(sub)
            ))}
        </ul>
    }
    const getEdition = (menu) => {

        if (hideEdition) {
            return <div className={classes.edition}></div>;
        }
        return <span className={classes.edition}>
            <IconButton edge="end" aria-label="delete" onClick={() => {
                handleClickOpen("DELETE", menu);
            }}>
                <DeleteIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit" onClick={() => {
                handleClickOpen("PUT", menu);
            }}>
                <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="Add" onClick={() => {
                handleClickOpen("ADD_CHILD", menu);
            }}>
                <AddIcon />
            </IconButton>
        </span>
    }
    const handleChange = (event) => {
        console.log('event: ', event);
    }
    const getCheckPrivileges = (menu) => {
        if (privileges) {
            return <FormControlLabel
                control={
                    <Checkbox
                        checked={menu.enabled}
                        onChange={handleChange}
                        color="primary"
                    />
                }
                label={menu.title}
            />
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
        if (menu.url) {
            return <li className={classes.item} key={index}>
                {getCheckPrivileges(menu)}
                {menu.items.length ? getSubList(menu) : null}
            </li>
        } else {
            return <li className={classes.item} key={index}>
                {getCheckPrivileges(menu)}
                {menu.items.length ? getSubList(menu) : null}
            </li>
        }
    }

    return (
        <div>
            {!hideTitle ?
                <Card className={classes.root}>
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
            <Paper>
                {
                    (status === STATUS.SUCCESS && Array.isArray(menu)) || Array.isArray(menu) ?

                        <ul >{menu.map((sub, index) =>
                            <li className={classes.item} key={index}>
                                {getLink(sub, index)}</li>
                        )}</ul>

                        : null
                }
                {
                    status === STATUS.PENDING ?
                        <div className={classes.wrapper}><CircularProgress className={classes.spinnerContainer} /> </div>
                        : null

                }
            </Paper>
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


export default withStyles(styles)(Menu);