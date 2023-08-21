import React from 'react';
import './App.css';
import { Game } from './proj';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
 
  return (
   <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Game/>}/> 
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
