import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

export const Game=()=>
{
    return(
        <>
        <div className="main">
            
            <div className="sd">
       
       <a href="https://poki.com/en/g/11-11">
       <img src="block.jpg"width={250}height={250}></img><br/>
        </a><br/></div>
        <div className="sd">
       <a href="https://poki.com/en/g/ludo-multiplayer">
       <img src="ludo.jpg"width={250}height={250}></img><br/>
        </a><br/></div>
        <div className="sd"> 
       <a href="https://poki.com/en/g/words-search-classic-edition">
       <img src="word.jpg"width={250}height={250}></img><br/></a><br/></div>
        </div>
        </>
    )
}