import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

export const Game=()=>
{
    return(
        <>
        <div className="main">
            <div className="sd">
       <img src="block.jpg"width={250}height={250}></img><br/>
       <a href="https://poki.com/en/g/11-11">
        <button className="button" >START</button></a><br/></div>
        <div className="sd">
        <img src="ludo.jpg"width={250}height={250}></img><br/>
       <a href="https://poki.com/en/g/ludo-multiplayer">
        <button className="button" >START</button></a><br/></div>
        <div className="sd">
        <img src="word.jpg"width={250}height={250}></img><br/>
       <a href="https://poki.com/en/g/words-search-classic-edition">
        <button className="button" >START</button></a><br/></div>
        </div>
        </>
    )
}