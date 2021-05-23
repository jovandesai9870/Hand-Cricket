var START=0;
var PLAY=1;
var END=2;
var gameState=0;

var one_img,two_img,three_img_four_img,five_im,six_img;

var one,two,three,four,five;

var play_button;

var target;

var background_img;

var computer,player,playerc,computerc,player_score=0;

function preload()
{
    one_img = loadImage("images/one.jpg");
    two_img = loadImage("images/two.jpg");
    three_img = loadImage("images/three.jpg");
    four_img = loadImage("images/four.jpg");
    five_img = loadImage("images/five.jpg");
    six_img = loadImage("images/six.jpg");
    background_img = loadImage("images/backg.jpg");
}

function setup()
{
    createCanvas(windowWidth,windowHeight);
   
    if(gameState===0)
    {
      play_button = createButton("PLAY")
      play_button.position(620,300);
      play_button.style('width','200px');
      play_button.style('height','50px');
      play_button.style('fontSize','30px');
      play_button.style('color','orange');
    }

    target = Math.round(random(10,30));

}

function draw()
{
  background(background_img);

  //Wait State
  if(gameState===0)
  {
    strokeWeight(10);
    stroke("blue");
    fill("red");
    textSize(36);
    text("HAND CRICKET",600,100);

    play_button.mousePressed(()=>{
         gameState=1;
         play_button.hide();
    });
  }

  //Play State
  if(gameState===1)
  {
    fill("blue");
    textSize(36);
    text("YOU ARE BATTING",565,50);

    //console.log(target);
    text("TARGET : "+target,610,180);

    one = createButton("1");
    one.position(600,600);
    one.style('width','50px');
    one.style('height','50px');

    two = createButton("2");
    two.position(700,600);
    two.style('width','50px');
    two.style('height','50px');

    three = createButton("3");
    three.position(800,600);
    three.style('width','50px');
    three.style('height','50px');

    four = createButton("4");
    four.position(600,700);
    four.style('width','50px');
    four.style('height','50px');

    five = createButton("5");
    five.position(700,700);
    five.style('width','50px');
    five.style('height','50px');

    six = createButton("6");
    six.position(800,700);
    six.style('width','50px');
    six.style('height','50px');

    player = createSprite(400,300,50,50);
    player.scale=3;
    text("Player : "+playerc,320,450);
    text("Score : "+player_score,320,550);

    one.mousePressed(()=>{
      playerc=1;
      computerc = Math.round(random(1,6));
      player_score+=1;
    });
    
    two.mousePressed(()=>{
      playerc=2;
      computerc = Math.round(random(1,6));
      player_score+=2;
    });
    three.mousePressed(()=>{
      playerc=3;
      computerc = Math.round(random(1,6));
      player_score+=3;
    });
    four.mousePressed(()=>{
      playerc=4;
      computerc = Math.round(random(1,6));
      player_score+=4;
    });
    five.mousePressed(()=>{
      playerc=5;
      computerc = Math.round(random(1,6));
      player_score+=5;
    });
    six.mousePressed(()=>{
      playerc=6;
      computerc = Math.round(random(1,6));
      player_score+=6;
    });



    computer = createSprite(1080,300,50,50);
    computer.scale=3;
    text("Computer : "+computerc,900,450);

    switch(computerc)
    {
      case 1 :
      computer.addImage(one_img);
      break;
      case 2 :
      computer.addImage(two_img);
      break;
      case 3 :
      computer.addImage(three_img);
      break;
      case 4 :
      computer.addImage(four_img);
      break;
      case 5 :
      computer.addImage(five_img);
      break;
      case 6 :
      computer.addImage(six_img);
      break;
      default : 
      break;
    }
   
    switch(playerc)
    {
      case 1 :
      player.addImage(one_img);
      break;
      case 2 :
      player.addImage(two_img);
      break;
      case 3 :
      player.addImage(three_img);
      break;
      case 4 :
      player.addImage(four_img);
      break;
      case 5 :
      player.addImage(five_img);
      break;
      case 6 :
      player.addImage(six_img);
      break;
      default : 
      break;
    }

    if(playerc===computerc && playerc!==undefined)
    {
        gameState=2;
    }

    if(player_score>target)
    {
      gameState=2
    }

}

//end state
if(gameState===2)
{


   if(playerc===computerc && playerc!==undefined)
   {
     fill("blue");
     textSize(36)
      text("You loose",600,200);
     // one.hide();
   }
  
   if(player_score>target)
    {
      fill("blue")
      textSize(36);
      text("You Won",600,200);
    }
    
    if(keyDown("space"))
    {
      //player.hide();
        reset();
    }
}

  drawSprites();
}

function reset()
{
  gameState=0;
  play_button.show();
  player_score=0;
  target=Math.round(random(10,30));
  playerc=undefined;
  computerc=-undefined;
  target=Math.round(random(10,30));
}