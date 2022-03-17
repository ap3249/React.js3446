
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

let name="Ashu";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>      
    {/* <Navbar title="The 3 Geeks" aboutText="About 3 Geeks" /> */}
    {/* <Navbar  /> */}
    <Navbar title="The 3 Geeks" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Textform heading="Enter the text to analyze" mode={mode}/> 
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
   