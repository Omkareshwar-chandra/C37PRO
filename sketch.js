var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;


var question, contestant, quiz;
var bg;

function preload()
{
  //bg = loadImage("bk.jpg");
}



function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(224,149,247);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
