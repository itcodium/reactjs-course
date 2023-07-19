import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../reducers/index';
import { STATUS } from '../../../App.exports';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const FlickrContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.flickr.status);
    const error = useSelector(state => state.flickr);
    const data = useSelector(state => state.flickr.data?.photos?.photo);
    useEffect(() => {
        dispatch(fetchPhotos())
        console.log("init -16", error);
    }, [dispatch])
    return (
        <>
            {status === STATUS.SUCCESS ?
                <ImageList cols={3}>
                    {data.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_z.jpg'}
                                srcSet={'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_w.jpg'}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                : null}
            {status === STATUS.LOADING ? <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error?.message}</Typography> : null}
        </>
    )
}

export default FlickrContainer;
