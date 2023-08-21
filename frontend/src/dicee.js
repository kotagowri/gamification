import { useEffect, useState } from "react";
export default function Dicee(){

    const [player1name, setplayer1name] = useState("");
    const [player2name, setplayer2name] = useState("");
    const [player3name, setplayer3name] = useState("");
    const [player4name, setplayer4name] = useState("");
    const [totalgames , settotalgames] = useState(7); 
    const[randomnum1 , setrandomnum1] = useState(0);
    const [randomnum2 , setrandomnum2] = useState(0);
    const [randomnum3 , setrandomnum3] = useState(0);
    const [randomnum4 , setrandomnum4] = useState(0);
    const [player1,setplayer1] = useState(0);
    const [player2,setplayer2] = useState(0);
    const [player3,setplayer3] = useState(0);
    const [player4,setplayer4] = useState(0);
    const [gamesplayed,setgamesplayed] = useState(0);
    useEffect(()=>{
        
        alert(
            "instructions: " +
              " 1. enter names of player1 ,player2 , player3 and player4, then total no of rounds you want to play  2.this game is available only in offline mode 3.anter all values properly "
          );
        setplayer1name(prompt("enter player 1 name ").toUpperCase());
        setplayer2name(prompt("enter player 2 name ").toUpperCase());
        setplayer3name(prompt("enter player 3 name ").toUpperCase());
        setplayer4name(prompt("enter player 1 name ").toUpperCase());
        settotalgames(prompt("number of rounds you want to play"));
        alert("roll the dicee to start the game have fun ");
       
        
        },[])
        let result = "404";
        var fakesplayed = 0;
       function Restart(){
          setrandomnum1(0)
          setrandomnum2(0)
          setplayer1(0);
          setplayer2(0)
          setrandomnum3(0);
          setrandomnum4(0);
          setplayer3(0);
          setplayer4(0);
          setgamesplayed(0);
          fakesplayed = 0;
          var audio = new Audio("assets/green.mp3");
          audio.play();
          document.getElementById("gamesplayed").innerHTML =
            fakesplayed + "/" + totalgames;
          document.getElementById("player1score").innerHTML = player1;
          document.getElementById("player2score").innerHTML = player2;
          document.getElementById("player3score").innerHTML = player3;
          document.getElementById("player4score").innerHTML = player4;
          document.getElementById("mybtn1").disabled = false;
          document.getElementById("mybtn2").disabled = false;
          document.getElementById("mybtn3").disabled = false;
          document.getElementById("mybtn4").disabled = false;
          document.getElementById("here2").hidden = false;
          document.getElementById("here1").hidden = false;
          document.getElementById("here3").hidden = false;
          document.getElementById("here4").hidden = false;
          document.getElementById("result").innerHTML = "play again  &#128521;";
          document.getElementById("restart").hidden = true;
          document.getElementById("mybtn").hidden = true;
          gameover();
        }
        function reload1() {
          displayplayernames();
          setrandomnum1(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("player1name").innerHTML = player1name;
          document.getElementById("player1names").innerHTML = player1name + " score:";
          document.getElementById("demo1").src = "assets/dice" + randomnum1 + ".png";
          document.getElementById("demo2").src = "assets/favicon.png";
        document.getElementById("demo3").src = "assets/favicon.png";
        document.getElementById("demo4").src = "assets/favicon.png";
          setgamesplayed(gamesplayed + 0.25);
          fakesplayed = fakesplayed + 1;
          document.getElementById("gamesplayed").innerHTML =
            fakesplayed + "/" + totalgames;
          setplayer1(player1 + randomnum1);
          document.getElementById("player1score").innerHTML = player1;
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = false;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = false;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("assets/blue.mp3");
          audio.play();
          gameover();
        }
        function reload2() {
          displayplayernames();
          setrandomnum2(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("demo1").src = "assets/favicon.png";
          document.getElementById("demo2").src = "assets/dice" + randomnum2 + ".png";
          document.getElementById("demo3").src = "assets/favicon.png";
          document.getElementById("demo4").src = "assets/favicon.png";
          document.getElementById("player2names").innerHTML = player2name + " score:";
          document.getElementById("player2name").innerHTML = player2name;
          setplayer2(player2 + randomnum2);
          setgamesplayed(gamesplayed + 0.25);
          document.getElementById("gamesplayed").innerHTML =
          fakesplayed + "/" + totalgames;
        
          document.getElementById("player2score").innerHTML = player2;
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = false;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = false;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("assets/blue.mp3");
          audio.play();
          gameover();
        }
        function reload3() {
          displayplayernames();
          setrandomnum3(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("player3name").innerHTML = player3name;
          document.getElementById("player3names").innerHTML = player3name + " score:";
          document.getElementById("demo1").src = "assets/favicon.png";
          document.getElementById("demo2").src = "assets/favicon.png";
          document.getElementById("demo3").src = "assets/dice" + randomnum3 + ".png";
          document.getElementById("demo4").src = "assets/favicon.png";
          setgamesplayed(gamesplayed + 0.25);
          
          document.getElementById("gamesplayed").innerHTML =
            fakesplayed + "/" + totalgames;
          setplayer3(player3 + randomnum3);
          document.getElementById("player3score").innerHTML = player3;
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = false;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = false;
          var audio = new Audio("assets/blue.mp3");
          audio.play();
          gameover();
        }
        function reload4() {
          displayplayernames();
          setrandomnum4(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("player4name").innerHTML = player4name;
          document.getElementById("player4names").innerHTML = player4name + " score:";
          document.getElementById("demo1").src = "assets/favicon.png";
        document.getElementById("demo2").src = "assets/favicon.png";
        document.getElementById("demo3").src = "assets/favicon.png";
          document.getElementById("demo4").src = "assets/dice" + randomnum4 + ".png";
          setgamesplayed(gamesplayed + 0.25);
          document.getElementById("gamesplayed").innerHTML =
            fakesplayed + "/" + totalgames;
          setplayer4(player4 + randomnum4);
          document.getElementById("player4score").innerHTML = player4;
          document.getElementById("mybtn1").disabled = false;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = false;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("assets/blue.mp3");
          audio.play();
          gameover();
        }
        function gameover() {
          if (gamesplayed === totalgames) {
            var audio = new Audio("assets/wrong.mp3");
            if (player1 > player2 && player1 > player3 &&player1 > player4) {
              result =player1name + " won the game ";
        
              setTimeout(() => {
                audio.play();
              }, 500);
            } else if (player2 > player1 && player2 > player3 &&player2 > player4) {
              result = player2name + " won the game";
        
              setTimeout(() => {
                audio.play();
                audio.play();
                audio.play();
              }, 500);
            } else if (player3 > player1 && player3 > player2 &&player3 > player4) {
                result = player3name + " won the game";
          
                setTimeout(() => {
                  audio.play();
                  audio.play();
                  audio.play();
                }, 500);
              } else if(player1=== player2 || player1=== player3 || player2=== player3 || player3=== player4 || player1===player4 ||player2 ===player4){
                result = "match tie between others";
        
              setTimeout(() => {
                audio.play();
                audio.play();
              }, 500);
        
              }else {
              result = player4name + " won the game ";
        
              setTimeout(() => {
                audio.play();
                audio.play();
              }, 500);
            }
        
            document.getElementById("result").innerHTML = result;
            document.getElementById("mybtn1").disabled = true;
            document.getElementById("mybtn2").disabled = true;
            document.getElementById("mybtn3").disabled = true;
            document.getElementById("mybtn4").disabled = true;
            document.getElementById("here2").hidden = true;
            document.getElementById("here1").hidden = true;
            document.getElementById("here3").hidden = true;
            document.getElementById("here4").hidden = true;
            document.getElementById("restart").hidden = false;
            document.getElementById("mybtn").hidden = false;
            document.getElementById("demo1").src = "assets/favicon.png";
            document.getElementById("demo2").src = "assets/favicon.png";
            document.getElementById("demo3").src = "assets/favicon.png";
            document.getElementById("demo4").src = "assets/favicon.png";
        
            document.getElementById("mybtn").innerHTML =
              " game over ! <br>" + "refresh page to start new game";
          }
        }
        function displayplayernames() {
          document.getElementById("player1nameagain").innerHTML = player1name;
          document.getElementById("player2nameagain").innerHTML = player2name;
          document.getElementById("player3nameagain").innerHTML = player3name;
          document.getElementById("player4nameagain").innerHTML = player4name;
        }
    return(
        <>

        <div className="container-fluid">
            <div className="text-center">
                <h1 id="result" className="text-center hbolder">play again
                    &#128521;</h1>
                <div><hr/></div>
            </div>

            <div className="row">
               
                <div className="col-sm-12 col-md-6 col-lg-6 heights">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <h3>rounds played</h3><p id="gamesplayed"></p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 id="player1names"></h3>
                        <p id="player1score"></p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 id="player2names"> </h3>
                        <p id="player2score"></p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 id="player3names"> </h3>
                        <p id="player3score"></p>
                       </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 id="player4names"> </h3>
                        <p id="player4score"></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    
                     
                    
                    <div className="dice">
                        <p id="player1name"></p>
                        <img className="img1" id="demo1" src="assets/favicon.png"/>
                    </div>

                    <div className="dice">
                        <p id="player2name"></p>
                        <img className="img1" id="demo2" src="assets/favicon.png"/>
                    </div>
                    <div className="dice">
                        <p id="player3name"></p>
                        <img className="img1" id="demo3" src="assets/favicon.png"/>
                    </div>

                    <div className="dice">
                        <p id="player4name"></p>
                        <img className="img1" id="demo4" src="assets/favicon.png"/>
                    </div>
                </div>
                <div className="empty"></div>
                <div className="col-sm-12 col-md-12">
                    <div className="col-sm-3 col-lg-3 col-md-3 dice">
                        <div className="column">
                          <div id="player1nameagain" className="bolded"></div>
                          <div>
                            <button onClick={reload1} id="mybtn1" ><img 
                               src="assets/dice.gif"/></button>
                          </div>
                          <div>
                            <img  src="assets/source.gif" id="here1"></img>
                          </div>
                        </div>
             
                    </div>
                     <div className="col-sm-3 dice">
                        <div className="column">
                          <div id="player2nameagain" className="bolded"></div>
                          <div>
                            <button onClick={reload2} id="mybtn2" ><img 
                               src="assets/dice.gif" /></button>
                          </div>
                          <div>
                            <img  src="assets/source.gif" id="here2"></img>
                          </div>
                        </div>
             
                      </div>
                      <div className="col-sm-2 dice">
                        <div className="column">
                          <div id="player3nameagain" className="bolded"></div>
                          <div>
                            <button onClick={reload3} id="mybtn3" ><img 
                               src="assets/dice.gif" /></button>
                          </div>
                          <div>
                            <img  src="assets/source.gif" id="here3"></img>
                          </div>
                        </div>
             
                      </div>
                      <div className="col-sm-3 dice">
                        <div className="column">
                          <div id="player4nameagain" className="bolded"></div>
                          <div>
                            <button onClick={reload4} id="mybtn4" ><img 
                              src="assets/dice.gif" /></button>
                          </div>
                          <div>
                            <img  src="assets/source.gif" id="here4"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                
            
            </div>
            <br/><br/>
            <div className="text-center">
                <button onClick={Restart} className="btn btn-success text-center " id="restart" hidden="true"><i className="bolded">Restart</i></button>
            </div>
           
        </div>
       
        <br />
     

    
        
        
        
        
        </>
    )
}