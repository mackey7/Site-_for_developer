import React, { Component } from 'react';
import Menu from './components/topMenu/Menu.jsx'
import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import FlatViews from './components/flatViews/FlatViews.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Menu />
        <Header />
        <FlatViews />
        <Contact />

      </div>
    );
  }
}

export default App;
