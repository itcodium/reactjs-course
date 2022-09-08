import './index.css'
import * as React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { NavBar, Footer, AplicationText } from './components/index';
import { theme } from './App.style';

import {
  ProductsListContainer,
  ProductsDetailContainer,
  CartListContainer,
} from './modules/e-commerce/index';

import {
  LogInContainer,
  SignUpContainer,
  LogOut,
} from './modules/authentication/index';

import {
  User,
  Menu,
  UserPrivileges
} from './modules/admin/index';

import PrivateRoute from './services/PrivateRoute';

function App() {
  const logIn = useSelector(state => state.login?.data);
  const menu = useSelector(state => state.login?.data);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth="lg">
          <NavBar menu={menu.menu} user={logIn.user} languages={AplicationText.lang}></NavBar>
          <Container sx={{ pl: { xs: 1 }, pr: { xs: 1 }, minHeight: '70vh', mb: 8 }} disableGutters={true} fixed >
            <Routes>
              <Route path="" element={<ProductsListContainer></ProductsListContainer>}></Route>
              <Route path="/:id" element={<ProductsListContainer></ProductsListContainer>}></Route>
              <Route path="/login" element={<LogInContainer></LogInContainer>}></Route>
              <Route path="/productDetail/:id" element={<ProductsDetailContainer></ProductsDetailContainer>}></Route>
              <Route path="/cart" element={<CartListContainer></CartListContainer>}></Route>
              <Route path="/signup" element={<SignUpContainer></SignUpContainer>} />
              <Route path="/logout" element={<LogOut></LogOut>}></Route>
              <Route path="/user" element={ <PrivateRoute><User/></PrivateRoute>}></Route>
              <Route path="/menu" element={ <PrivateRoute><Menu/></PrivateRoute>}></Route>
              <Route path="/userPrivileges" element={ <PrivateRoute><UserPrivileges/></PrivateRoute>}></Route>
            </Routes>
          </Container>
          <Footer
            sections={AplicationText.footer}
            social={AplicationText.social}
            copyright={AplicationText.copyright}
          ></Footer>
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

// https://docs.google.com/document/d/1pj-gatjxqk7pv8uRv4gN3HBFVuQj3FhGQxwNy1gA2Uk/edit
// sx={{ mt: 4, mb: 4, pl: { xs:1}, mr: {xs:1 } }}

