import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    let location = useLocation();
    const login = useSelector(state => state.login?.data);

    useEffect(() => {
        if (!login?.user) {
            navigate("/login", { state: { from: location.pathname } });
        }
    });

    if (login?.user) {
        return children;
    }
}
export default PrivateRoute;
