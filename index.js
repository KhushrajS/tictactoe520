
//game variables  
var symbol="X" ;  
var turnx=true;    
var blockid;

//game objects      
var blockr1s=document.getElementsByClassName("blockr1");  
var blockr2s=document.getElementsByClassName("blockr2"); 
var blockr3s=document.getElementsByClassName("blockr3");     
var board=document.getElementById("gameBoard");    
var playerXStatus=document.getElementById("pl1");   
var playerOStatus=document.getElementById("pl2"); 
var resetButton=document.getElementById("reset");
//game sounds           
var invalidSound=new Audio("./sounds/invalidMoveSound.wav")   
var moveSound=new Audio("./sounds/moveSound.wav")
var data=[

    //0 means empty 1 means X and 2 means O
    [0,0,0,0],
    [0,0,0,0],  
    [0,0,0,0],  

]

var drawSum=0;

//change symbol function    and change data     















function resetGame(){

    symbol="X" ;  
    turnx=true;      

    resetStatus()

   data=[

       //0 means empty 1 means X and 2 means O
       [0,0,0,0],
       [0,0,0,0],  
       [0,0,0,0],  
   
   ]
   Array.from(blockr1s).forEach(function(block){

       block.innerText=""





   })  
   Array.from(blockr2s).forEach(function(block){


       block.innerText=""  

   })
   Array.from(blockr3s).forEach(function(block){



       block.innerText=""
   })



}

function checkDraw(){



}




function resetStatus(){

    playerXStatus.innerText="Player X (turn)"  
    playerOStatus.innerText="Player O"   


}


function iswin(coden){

 


    if(data[0][1]==data[0][2] && data[0][2]==data[0][3] && data[0][2]==coden){
        return true
    }
    else if(data[0][1]==data[1][2]&&data[2][3]==data[0][1]&&data[1][2]==coden){
        return true
    }
    else if(data[0][3]==data[1][2]&&data[2][1]==data[0][3]&&data[0][3]==coden){
        return true
    }
    
    

    else if(data[2][1]==data[2][2] && data[2][2]==data[2][3] && data[2][2]==coden){

        return true
    }
    else if(data[1][1]==data[1][2] && data[1][2]==data[1][3] && data[1][2]==coden){

        return true
    }
    else if(data[0][1]==data[1][1] && data[1][1]==data[2][1] && data[1][1]==coden){

        return true
    }

  else if(data[0][3]==data[1][3] && data[1][3]==data[2][3] && data[1][3]==coden){

        return true
    }

    else if(data[0][2]==data[1][2]&&data[1][2]==data[2][2]&&data[0][2]==coden){
        return true
    }




}


function winmessageBox(player){
var winsound=new Audio("./sounds/win.wav")  
winsound.play();
    board.setAttribute("style","position:absolute")   
    var winbox=document.createElement("div")
    var image=document.createElement("img")    
    var winmessage=document.createElement("h1")  
    var okbutton=document.createElement("button")  
    var windetials=document.createElement("div")  
    okbutton.innerText="Ok"
    windetials.setAttribute("id","wind")
    okbutton.setAttribute("id","okb")
    board.setAttribute("style","opacity:0.5")
    winbox.setAttribute("id","winboxm")
    winmessage.innerHTML="Player "+player+" win"
    image.setAttribute("src","./gifs/wincl.gif")  
    image.setAttribute("id","winimage")
    winmessage.setAttribute("id","winmessagem")
    winbox.appendChild(image)
    windetials.appendChild(winmessage)
    windetials.appendChild(okbutton)
    document.body.appendChild(winbox)
    document.body.appendChild(windetials)
    okbutton.addEventListener("click",function(){
        resetGame()
winbox.remove();  
windetials.remove();  
okbutton.remove();
board.setAttribute("style","opacity:1")
})}



function tiemessageBox(){
    var winsound=new Audio("./sounds/win.wav")  
    winsound.play();
        board.setAttribute("style","position:absolute")   
        var winbox=document.createElement("div")
        var image=document.createElement("img")    
        var winmessage=document.createElement("h1")  
        var okbutton=document.createElement("button")  
        var windetials=document.createElement("div")  
        okbutton.innerText="Ok"
        windetials.setAttribute("id","wind")
        okbutton.setAttribute("id","okb")
        board.setAttribute("style","opacity:0.5")
        winbox.setAttribute("id","winboxm")
        winmessage.innerHTML="Its a draw"
        image.setAttribute("src","./gifs/wincl.gif")  
        image.setAttribute("id","winimage")
        winmessage.setAttribute("id","winmessagem")
        winbox.appendChild(image)
        windetials.appendChild(winmessage)
        windetials.appendChild(okbutton)
        document.body.appendChild(winbox)
        document.body.appendChild(windetials)
        okbutton.addEventListener("click",function(){
            resetGame()
    winbox.remove();  
    windetials.remove();  
    okbutton.remove();
    board.setAttribute("style","opacity:1")
    })}



























































//event listners to block of row 1     

//blockrs1 is no a array so we use Array.from method to convert it in array
Array.from(blockr1s).forEach(function(block){

//set player status function    

function setplayerXturnStatus(){

    playerXStatus.innerText="Player X (turn)"  
    playerOStatus.innerText="Player O"   


}

function setplayerOturnStatus(){
    playerXStatus.innerText="Player X "  
    playerOStatus.innerText="Player O (turn)"   

}








block.addEventListener("click",function(){


blockid=parseInt(block.getAttribute("id").slice(-1))
if(checkDraw()==12){tiemessageBox()}
if(symbol=="X" && turnx && data[0][blockid]==0)
            {   
moveSound.play()
                block.innerHTML=symbol
            
                    data[0][blockid]=1
               if(iswin(1)){

                winmessageBox(symbol)

}

                    turnx=false;   
                    setplayerOturnStatus()
                    symbol="O"   
            
            
            }
        else if(symbol=="O" && !turnx && data[0][blockid]==0)
            {
                moveSound.play()
                block.innerHTML=symbol
   
       
                data[0][blockid]=2
                if(iswin(2)){

                    winmessageBox(symbol)
                    
    }



                turnx=true;   
            setplayerXturnStatus()
                symbol="X"
            }  
        else{



            invalidSound.play();
        }
    
    })
    

})

//event listners to block of row 2 

Array.from(blockr2s).forEach(function(block){
    
    function setplayerXturnStatus(){

        playerXStatus.innerText="Player X (turn)"  
        playerOStatus.innerText="Player O"   
    

    
    }
    
    
    function setplayerOturnStatus(){

    
        playerXStatus.innerText="Player X "  
        playerOStatus.innerText="Player O (turn)"   
    
    
    }
    
    


    block.addEventListener("click",function(){

    blockid=parseInt(block.getAttribute("id").slice(-1))

    
            if(symbol=="X" && turnx && data[1][blockid]==0)
                {   
                moveSound.play()
                        block.innerHTML=symbol
                       
                        data[1][blockid]=1


                        if(iswin(1)){
                            winmessageBox(symbol)
                        }
                     
                        turnx=false;   
                        setplayerOturnStatus()
                        symbol="O"   
                
                
                }
            else if(symbol=="O" && !turnx && data[1][blockid]==0)
                {
                    moveSound.play()
                block.innerHTML=symbol
                    data[1][blockid]=2
                    if(iswin(2)){

                        winmessageBox(symbol)
                        
        }
            
                    turnx=true;   
                    setplayerXturnStatus()
                    symbol="X"
                }  
                else{



                    invalidSound.play();
                }

        
        })
        
    })


//event listners to block of row 3

Array.from(blockr3s).forEach(function(block){

    function setplayerXturnStatus(){


        playerXStatus.innerText="Player X (turn)"  
        playerOStatus.innerText="Player O"   
    
    
    
    }
     
    function setplayerOturnStatus(){
    
        playerXStatus.innerText="Player X "  
        playerOStatus.innerText="Player O (turn)"   
    
    
    }
    
  

    block.addEventListener("click",function(){
    blockid=parseInt(block.getAttribute("id").slice(-1))
    
            if(symbol=="X" && turnx && data[2][blockid]==0)
                {   
                moveSound.play()
                     block.innerHTML=symbol
                   
                        data[2][blockid]=1

                        if(iswin(1)){
                            winmessageBox(symbol)
                        }
                      

                        turnx=false;   
                        setplayerOturnStatus()
                        symbol="O"   
                
                
                }
            else if(symbol=="O" && !turnx && data[2][blockid]==0)
                {
                   moveSound.play()
                    block.innerHTML=symbol
                    data[2][blockid]=2
                    if(iswin(2)){

                        winmessageBox(symbol)
                        
                        }
                 
    
                    turnx=true;   
                    setplayerXturnStatus()
                    symbol="X"
                }

                else{

                 
                    invalidSound.play();
                    
                }  
        })
        
    
    })

//add event listener to reset button for reseting game       

var winboxcss={
    "background-color":"white",  
    "width":"70%", 
    "height":"40%",  

}

resetButton.addEventListener("click", function(){


     symbol="X" ;  
     turnx=true;      

     resetStatus()

    data=[

        //0 means empty 1 means X and 2 means O
        [0,0,0,0],
        [0,0,0,0],  
        [0,0,0,0],  
    
    ]
    Array.from(blockr1s).forEach(function(block){

        block.innerText=""





    })  
    Array.from(blockr2s).forEach(function(block){


        block.innerText=""  

    })
    Array.from(blockr3s).forEach(function(block){



        block.innerText=""
    })



})



//win message box           





