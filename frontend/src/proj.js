import React, { useEffect, useState } from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

export const Game=()=>
{
    let gamepoints=0;
    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
}
    // useEffect(()=>{
    //     console.log("UseEffecting called");
    // },[count]
    return(
        <>
        
        <div className="main"> 
           <div className="text">
           <h1>WELCOME</h1>
        </div> 
        <h2 className="h2"> game points: {count} </h2> 
        <marquee><h3>click on the image to play game😊 </h3></marquee><br/>
        {/* {count} */}
            <div className="sd">
       <a href="https://poki.com/en/g/11-11" target="_blank">
       <img onClick={Increment} src="block.jpg" alt="block" width={150}height={150}></img></a><br/>
        <br/></div>

        <div className="sd">
       <a href="https://poki.com/en/g/ludo-multiplayer" target="_blank">
       <img onClick={Increment} src="ludo.jpg" alt="ludo" width={150}height={150}></img><br/>
        </a><br/></div>

        <div className="sd"> 
       <a href="https://poki.com/en/g/words-search-classic-edition" target="_blank">
       <img onClick={Increment} src="word.jpg" alt="word" width={150}height={150}></img><br/></a><br/></div>

        <div className="sd"> 
       <a href="/games/dicee" >
       <img src="dice.png" alt="dice" width={150}height={150}></img><br/></a><br/></div>
        </div>

        </>
    )
}