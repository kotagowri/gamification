import React from 'react';
import './App.css';
import Dicee from './dicee';
import { Game } from './proj';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Game/>}/> 
     <Route path="/games/dicee" element={<Dicee/>}/>
    </Routes>
    </BrowserRouter>
</>
  );
}
export default App;
