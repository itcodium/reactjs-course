import React, { useEffect } from 'react'

const FlickrContainer = () => {
    useEffect(() => {
        console.log("init -16")
    }, [])
    return (
        <>hello environment: <b>- WATCHPACK_POLLING=true</b></>
    )
}

export default FlickrContainer;