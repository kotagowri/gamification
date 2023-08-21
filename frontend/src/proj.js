import React from "react";
//import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

export const Game=()=>
{
    return(
        <>

       <img src="block.jpg"width={250}height={250}></img><br/>
       <a href="https://poki.com/en/g/11-11">
        <button className="button" >START</button></a><br/>
        <img src="ludo.jpg"width={250}height={250}></img><br/>
       <a href="https://poki.com/en/g/ludo-multiplayer">
        <button className="button" >START</button></a><br/>
        
        </>
    )
}