import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

export const Game=()=>
{
    return(
        <>
        
        <div className="main"> 
           <div className="text">
           <h1>WELCOME</h1>
        </div>  
        click on the image to play game😊 <br/>
            <div className="sd">
       <a href="https://poki.com/en/g/11-11">
       <img src="block.jpg"width={150}height={150}></img><br/>
        </a><br/></div>
        <div className="sd">
       <a href="https://poki.com/en/g/ludo-multiplayer">
       <img src="ludo.jpg"width={150}height={150}></img><br/>
        </a><br/></div>
        <div className="sd"> 
       <a href="https://poki.com/en/g/words-search-classic-edition">
       <img src="word.jpg"width={150}height={150}></img><br/></a><br/></div>
        </div>
       
        </>
    )
}