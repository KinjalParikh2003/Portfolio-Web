//button for games and RPS
let btnRock,btnPaper,btnScissor,btn1game,btn3Game,btn5Game

// variables for text
let txtWelcome , txtInst, txtResult 

// button end the game and replay
let btnReplay , btnEndGame

// variable for computerChoice
let compOpt;

function setup() {
  
  createCanvas(400, 400);
  txtWelcome = " Welcome to my Game "
  txtInst = "Please choose the game format"
  txtResult = ""
  
// buttons for 1 3 5 games 
  btn1Game = createButton('Single Game')
  btn1Game.position(25, 150)
  btn1Game.style('width', '100px')
  btn1Game.mousePressed( showRPS )
  
  btn3Game = createButton('Best of Three')
  btn3Game.position(150, 150)
  btn3Game.style('width', '100px')
  
  btn5Game = createButton('Best of Five')
  btn5Game.position(275, 150)
  btn5Game.style('width', '100px')
  
// button for R P S
  btnR = createButton('Rock')
  btnR.position(25, 180)
  btnR.style('width', '100px')
  btnR.hide()
  btnR.mousePressed( CompareRock )
  
  btnP = createButton('Paper')
  btnP.position(150, 180)
  btnP.style('width', '100px')
  btnP.hide()
  btnP.mousePressed( ComparePaper )
  
  btnS = createButton('Scissors')
  btnS.position(275, 180)
  btnS.style('width', '100px')
  btnS.hide()
  btnS.mousePressed( CompareScissor )
  
//button for Replay and the Endgame
  btnReplay = createButton('Replay')
  btnReplay.position(100, 180)
  btnReplay.style('width', "100px")
  btnReplay.hide()
  btnReplay.mousePressed(NewGame)
  
  btnEndGame = createButton('EndGame')
  btnEndGame.position(220, 180)
  btnEndGame.style('width', "100px")
  btnEndGame.hide()

//reset random number compOpt
  }
  
  function draw() {
  background(220);
  
  text( txtWelcome, 100, 60)
  textSize(20)
  text( txtInst, 55, 90)
  text( txtResult , 120, 300)
  
  }

  function showRPS()
  {
    txtInst = " choose among Rock, Paper, Scissors"
    txtResult = ""
    txtWelcome = ""
    
//hide game options 
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
  
//show Rock paper scissors buttons
  
  btnR.show()
  btnP.show()
  btnS.show()
  
}
  
function CompareRock()
  {  
    if(compOpt == 1)
      {
       txtResult = "It's Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else 
      {
        txtResult = "You Won !" 
      }   
    ShowResult()
  }

function ComparePaper()
  {  
    if(compOpt == 1)
      {
       txtResult = "You Won!"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Draw ! "  
      }
    else 
      {
        txtResult = "Computer Won !" 
      }   
    ShowResult()
  }

function CompareScissor()
  {  
    if(compOpt == 1)
      {
       txtResult = "Computer Won!"  
      }
    else if(compOpt == 2)
      {
       txtResult = "You Won! "  
      }
    else 
      {
        txtResult = "Draw !" 
      }   
    ShowResult()
  }

function NewGame()
{
  compOpt = round(random (0.5, 3.5) )
  showRPS();
  btnReplay.hide()
  btnEndGame.hide()
}

function ShowResult()
{
  btnR.hide()
  btnS.hide()
  btnP.hide()
  
  txtInst = ""
  
  btnEndGame.show()
  btnReplay.show()
  
}
