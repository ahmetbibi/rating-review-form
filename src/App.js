import Product from './components/Product';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
// import moduleName from 'module';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <Container text className='container'>
      <Header as='h1' size='huge'>
        Product Page
      </Header>
      <Product />
    </Container>
  );
}

export default App;
