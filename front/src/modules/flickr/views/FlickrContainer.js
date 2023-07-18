import React, { useEffect } from 'react';
import { queryStringToJSON } from '../../../libs/flickr/index';

const FlickrContainer = () => {
    useEffect(() => {
        console.log("init -16", )
        console.log("queryStringToJSON: ", queryStringToJSON("?test=hello&param=world"));
    }, [])
    return (
        <>hello environment: <b>test</b></>
    )
}

export default FlickrContainer;
