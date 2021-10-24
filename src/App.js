import './App.css';
import React, { Fragment } from 'react';

import Header from './components/header/Header';
// import Nav from './components/nav/Nav';
import Home from './routes/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Fragment>
      <Header />
      <Home >
        {/* <Footer /> */}
      </Home>


    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
