import React from 'react';
import { NavLink } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const styles = {
    fullList: {
        width: 250,
        color: '#000',
    },
};

function SideBarMenu({ menu }) {

    const getSubList = (menu) => {
        if (menu.items.length) {
            return <List sx={{ display: 'block' }}> {menu.items.map((sub, i) => (
                <ListItem sx={{ display: 'block' }} key={i}>
                    {getLink(sub)}
                </ListItem>
            ))
            }</List>;
        }
    }

    const getLink = (menu) => {
        if (menu.url) {
            return <NavLink className='link' to={menu.url} >
                <Typography sx={{ ml: 1, display: 'block' }} variant="caption">{menu.title}</Typography>
                {getSubList(menu)}
            </NavLink>
        } else {
            return <Typography variant="caption">
                {menu.title} {getSubList(menu)}
            </Typography>
        }
    }

    return (
        <div sx={styles.fullList}>
            {menu?.length >= 0 && getSubList({ ...menu, items: menu })}
        </div>
    );
}

export default SideBarMenu;
