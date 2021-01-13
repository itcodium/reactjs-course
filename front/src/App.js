import { Route, HashRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrivateRoute from './services/PrivateRoute'
import Home from './components/home/home'
import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'
import ProductDetail from './modules/shopping/user/products/productDetail'
import Login from './components/login/login'
import SignUp from './components/signUp/signUp.js';
import styles from './App.styles';

function App(props) {
  const { classes } = props;
  return (
    <HashRouter >
      <div>
        <header className={classes.container}>
          <Header></Header>
        </header>
        <main className={classes.layout}>

          <Grid container>
            <Grid item xs={12} md={12}>
              <PrivateRoute key="1" exact path="/" component={Home} />
              <PrivateRoute key="10" path="/Home" component={Home} />
            </Grid>
            <Grid item xs={12} md={12} >
              <div className={classes.container} >
                <Route key="70" path="/SignUp" component={SignUp} />
                <Route key="80" path="/Login" component={Login} />
                <PrivateRoute
                  key="110"
                  path='/ProductDetail/:id'
                  component={ProductDetail}
                />
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
