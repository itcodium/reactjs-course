import { Route, HashRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrivateRoute from './services/PrivateRoute'
import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'
import Login from './modules/login/login'
import SignUp from './app/signUp/signUp.js';
import styles from './App.styles';

import ProductView from './modules/products/productView'
import ProductDetail from './modules/products/productDetail'
import Menu from './modules/admin/menu'
import Module from './modules/admin/module'
import User from './modules/admin/user'
import Perfil from './modules/admin/perfil'
import PerfilModule from './modules/admin/perfilModule'

const MENU = {
  "/menu": Menu,
  "/products": ProductView
}

function App(props) {
  const { classes } = props;
  const menu = useSelector(state => state.menu.menu);
  let URL = "/products";
  if (menu.length) {
    URL = !menu[0].url ? menu[0].items[0].url : menu[0].url;
  }
  return (
    <HashRouter >
      <div>
        <header className={classes.container}>
          <Header></Header>
        </header>
        <main className={classes.layout}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className={classes.container} >
                <PrivateRoute key="1" exact path="/" component={MENU[URL]} />
              </div>
            </Grid>
            <Grid item xs={12} md={12} >
              <div className={classes.container} >
                <Route key="70" path="/SignUp" component={SignUp} />
                <Route key="80" path="/Login" component={Login} />
                <PrivateRoute key="10" path='/products' component={ProductView} />
                <PrivateRoute key="110" path='/productDetail/:id' component={ProductDetail} />
                <PrivateRoute key="120" path='/perfil' component={Perfil} />
                <PrivateRoute key="130" path='/module' component={Module} />
                <PrivateRoute key="140" path='/perfilModule' component={PerfilModule} />
                <PrivateRoute key="150" path='/user' component={User} />
                <PrivateRoute key="160" path='/menu' component={Menu} />
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
