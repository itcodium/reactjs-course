import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    useEffect(() => {
        onAdd(count);
    }, [count]);

    return (
        <Box sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', }}>
            <IconButton component="span" variant="h6" onClick={() => setCount(count - 1)} disabled={!count}>
                <Remove />
            </IconButton>
            <Typography component="span" variant="h6" color={ (count > stock) ? 'red' : 'text.secondary'} sx={{ pl: 2, pr: 2 }} >{count} 
                <Typography component="span" variant="caption"  gutterBottom sx={{ mb: 1.5 }}> de {stock}</Typography>
            </Typography>
            <IconButton component="span" variant="h6" onClick={() => setCount(count + 1)} disabled={ (stock == count) || (count > stock) } >
                <Add />
            </IconButton>
            { count > stock && <Typography component="div" variant="caption" color='red'  gutterBottom > Product out of stock</Typography> }
        </Box>
    )
}

export default Counter;