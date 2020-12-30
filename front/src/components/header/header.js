import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import styles from './header.styles';
import LOGIN from '../../redux/actions/login'
import LoginService from '../../services/LoginService'

function Header(props) {
    const { classes } = props;
    const service = LoginService;
    const location = useLocation().pathname;
    let history = useHistory();
    const dispatch = useDispatch();

    const logOut = (event) => {
        dispatch(LOGIN.out())
        history.push('#/Login')
        event.preventDefault();
    }

    const links = [{ path: "/Home", label: "Home", login: true },
    { path: "/SignUp", label: "SignUp", login: false, hide: true },
    { path: "/Login", label: "LogIn", login: false },
    { path: "", label: "LogOut", onClick: logOut, login: true }
    ];
    const menu = () => {
        return links.map((link, index) => {
            if (service.isLoggedIn() === link.login && link.path != location && !link.hide) {
                return <Link key={index} onClick={link.onClick} href={"#" + link.path}>{link.label}</Link>
            }
        });
    }
    return (<Typography className={classes.menu}>
        {menu()}
    </Typography>)
}

const mapStateToProps = state => {
    return { state: state.login };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Header);