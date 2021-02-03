import './reset.css'
import './App.css'
import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Subheader from './Components/Subheader'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header className='header' />
      <Subheader className='subheader'/>
      <Main />
      <Footer className='footer'/>
    </div>
  );
}

export default App;
