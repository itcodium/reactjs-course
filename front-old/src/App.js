import { useEffect } from 'react';
import { Route, HashRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrivateRoute from './services/PrivateRoute'
import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'
import Login from './modules/auth/login/login'
import Logout from './modules/auth/login/logout'
import SignUp from './modules/auth/signUp/signUp.js';
import styles from './App.styles';
import LOGIN from './redux/actions/login'

import ProductView from './modules/products/productView'
import Home from './modules/home/home'
import ProductDetail from './modules/products/productDetail'
import Menu from './modules/admin/menu/menu'
import User from './modules/admin/user/user'
import UserPrivileges from './modules/admin/user/userPrivileges'



const MENU = {
  "/menu": Menu,
  "/": Home,
  "/products": ProductView,
  "/userPrivileges": UserPrivileges,
  "/user": User,
  "/menu": Menu,
}

function App(props) {
  const { classes } = props;
  const { menu } = useSelector(state => (state.login.payload ? state.login.payload : {}))
  const dispatch = useDispatch();

  let URL = "/";

  useEffect(() => {
    if (!menu) {
      dispatch(LOGIN.out())
    }
  }, [])

  console.log('APP menu: ', menu);
  if (menu && menu.length) {
    console.log('menu[0].url: ', menu[0].url);
    if (menu[0].url) {
      URL = menu[0].url;
    } else {
      if (!menu[0].url && menu[0].items.length) {
        URL = menu[0].items[0].url;
      } else {
        URL = !menu[1].url ? menu[1].items[0].url : menu[1].url;
      }
    }
  }
  console.log('URL: ', URL);
  return (
    <HashRouter>
      <div>
        <header className={classes.container}>
          <Header></Header>
        </header>
        <main className={classes.layout}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className={URL !== "/" ? classes.container : null} >
                <Route key="1" exact path="/" component={MENU[URL]} />
              </div>
            </Grid>
            <Grid item xs={12} md={12} >
              <div className={classes.container} >
                <Route key="70" path="/SignUp" component={SignUp} />
                <Route key="80" path="/Login" component={Login} />
                <Route key="90" path="/Logout" component={Logout} />
                <PrivateRoute key="10" path='/products' component={ProductView} />
                <PrivateRoute key="110" path='/productDetail/:id' component={ProductDetail} />
                <PrivateRoute key="120" path='/user' component={User} />
                <PrivateRoute key="130" path='/userPrivileges' component={UserPrivileges} />
                <PrivateRoute key="140" path='/menu' component={Menu} />
              </div>
            </Grid>
          </Grid>
        </main>
        <footer className={classes.container}>
          <Footer></Footer>
        </footer>
      </div>
    </HashRouter>
  )
}

export default withStyles(styles)(App);
