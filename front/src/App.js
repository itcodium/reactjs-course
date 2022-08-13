import './index.css'
import * as React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
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
  SignUpContainer
} from './modules/authentication/index';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth="lg">
          <NavBar languages = {AplicationText.lang}></NavBar>
          <Container sx={{ pl: { xs: 1 }, pr: { xs: 1 }, minHeight: '70vh', mb:8 }} disableGutters={true} fixed >
            <Routes>
              <Route path="" element={<ProductsListContainer></ProductsListContainer>}></Route>
              <Route path="/:id" element={<ProductsListContainer></ProductsListContainer>}></Route>
              <Route path="/productDetail/:id" element={<ProductsDetailContainer></ProductsDetailContainer>}></Route>
              <Route path="/cart" element={<CartListContainer></CartListContainer>}></Route>
              <Route path="/login" element={<LogInContainer></LogInContainer>}></Route>
              <Route path="/signup" element={<SignUpContainer></SignUpContainer>} />
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

// 