import './reset.css'
import './App.css'
import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  return (
    <div>
      <Header className='header' />
      <Main />
    </div>
  );
}

export default App;
