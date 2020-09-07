import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContainerApp from './components/ContainerApp';



function App() {
  return (
    <div className="App ">       
    
        <Navbar/>      
        <header>                                 
          <ContainerApp/>        
        
        </header>        

        <Footer/>

  
    </div>
  );
}

export default App;
