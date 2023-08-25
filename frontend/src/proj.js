import React, { useEffect, useState  } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



export const Game=()=>
{
    let gamepoints=0;
    const nav=useNavigate();
    const[streak,setStreak]=useState(0);
    const[count,setCount]=useState('');
    const[email,setEmail]=useState([]);
    const locale='en';
    const today=new Date();
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const year = today.toLocaleDateString(locale, { year: 'numeric' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })},${year}\n\n`;
    const Disable=()=>{
        document.getElementById("ludo").disabled=true;

    }
    const Increment=async()=>{
    try{
        const res1=await axios.get('http://localhost:8000/find1/'+email)
        if(Date.parse(date)===Date.parse(res1.data.Date))
        {
                 setStreak(res1.data.Streak);
        }
        else{
            setStreak(parseInt(res1.data.Streak)+1);
        }
        const res=await axios.get('http://localhost:8000/show/'+email)
        {
            if(res.data){
                gamepoints=parseInt(res.data.Gamepoints)+1;
                const res1=await axios.post('http://localhost:8000/update/'+email+"/"+gamepoints)
                {
                    if(res1.data){
                        setCount(gamepoints);
                    }
                    else{
                        alert("no")
                    }
                }
            }
            else
            {
                nav('/');
                // alert('cant find')
            }
        }
    }
    catch(e){
        console.log(e);
    }
}
   
    return(
        <>
        
        <div className="main"> 
           <div className="text">
           <h1>WELCOME</h1>
        </div> 
        <h2 className="h2"> game points: {count} </h2> 
        <h3>click on the image to play game😊 </h3><br/>
        <div>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <button onClick={Increment}>enter</button>
        </div>

            <div className="sd">
       <a href="https://poki.com/en/g/11-11" target="_blank">
       <img onClick={Increment} src="block.jpg" alt="block" width={150}height={150}></img></a><br/>
        <br/></div>

        <div className="sd">
       <a href="https://poki.com/en/g/ludo-multiplayer" target="_blank" id="ludo">
       <img onClick={Increment} src="ludo.jpg" alt="ludo" width={150}height={150}></img><br/>
        </a><br/>{Disable}</div>

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