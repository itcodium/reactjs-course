import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import categoryList from "../data/categories.json";

const Categories = () => {
    return <MenuList sx={{ display: 'flex' }}>
        {
            categoryList.map((item, i) => (
                <MenuItem>
                    <Link to={"/" + item.id} className='link' sx={{ minWidth: 100 }} >
                        <Typography variant="overline" color="secondary">{item.name}</Typography>
                    </Link>
                </MenuItem>
            ))
        }
    </MenuList>
}

export default Categories;