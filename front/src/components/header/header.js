import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import styles from './header.styles';
import LOGIN from '../../redux/actions/login'

function Header(props) {
    const dispatch = useDispatch();
    const { classes } = props;

    const login = () => {
        return <Typography className={classes.menu}>
            <Link href="#/Home">Home</Link>
            <Link className={classes.menuHover} onClick={() => {
                dispatch(LOGIN.out())
            }}>Logout</Link>
        </Typography >
    }
    const nologin = () => {
        return <Typography className={classes.menu}>
            <Link href="#/SignUp">SignUp</Link>
            <Link href="#/Login">Login</Link>
        </Typography >
    }
    return (
        props.state.payload && props.state.payload.status == "ok" ?
            login()
            : nologin()
    )
}

const mapStateToProps = state => {
    return { state: state.login };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Header);