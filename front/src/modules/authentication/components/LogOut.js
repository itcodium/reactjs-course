import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import LOGIN from '../../../redux/actions/login'

function LogOut() {
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        dispatch(LOGIN.out());
        history.push('/Login')
    }, [])
    return (<a href="#/">Home</a>)
}

export default LogOut;