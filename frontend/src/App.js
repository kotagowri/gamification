import React from 'react';
import './App.css';
import Dicee from './dicee';
import { Game } from './proj';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import SearchBar2 from './rohini';
function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Game/>}/> 
     <Route path="/games/dicee" element={<Dicee/>}/>
     {/* <Route path="/search" element={<SearchBar2/>}/> */}
    </Routes>
    </BrowserRouter>
</>
  );
}
export default App;
