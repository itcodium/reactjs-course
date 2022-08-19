import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { init } from '../reducers/login';

function LogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(init());
        navigate('/');
    }, []);
}

export default LogOut;