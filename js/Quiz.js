class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background(88,128,170);

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    textFont("Impact");
    fill(0);
    text("Result Of The Quiz", 570, 280);
    fill(0);
    rect(550,290,250,3);
    rect(390,360,615,3);
    
    rect(300,230,800,10);
    fill(0);
    rect(300,240,10,410);
    fill(0);
    rect(300,650,800,10);
    fill(0);
    rect(1090,240,10,410);



    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();



    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
    {
      textSize(25);
    textFont("Impact");
    fill(0);
    text("Contestant who answered correct is highlighted in green!",400, 350);

    var displayPosition = 400;
        
    for(var plr in allContestants)
    {
      
        var CorrectAnswer = "2"
        if(allContestants[plr].answer=== CorrectAnswer)
        {
          fill(14,87,40);
          }
        else{
          fill(198,3,18)
          
        }

        textSize(45);
        displayPosition += 80
        stroke(0);
        strokeWeight(3);
        text(allContestants[plr].name + " : " + allContestants[plr].answer, 400, displayPosition)
        
    

    }

    }
    drawSprites();

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
