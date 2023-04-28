import React, { useState } from 'react';

import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




// let name='Mit';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('','');
  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('','');
    }, 1500);
  }
  const changemode = () =>
  {
    if(mode==='light'){

      setmode('dark');
      document.body.style.backgroundColor= '#052c65';
      showAlert(":Converted to dark mode","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert(":Converted to light mode","success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title='PM&E' mode={mode} changemode={changemode}/>
        <Alert alert={alert}/>
        <div>
          <Routes>
            <Route exact path="/About" element={ <About mode={mode}/>}>
             
            </Route>
            
            <Route exact path="/" element={<TextForm mode={mode}/>}> 
            </Route>
          </Routes>
        </div>
      </Router>
    </>
              
  );
}

export default App;
