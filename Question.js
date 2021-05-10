class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option No.");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){

    /*this.title.html("MyQuiz Game");
    this.title.position(350, 0);*/

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter?" );
    this.question.position(150, 110);
    this.option1.html("1: Everyone" );
    this.option1.position(170, 130);
    this.option2.html("2: Example" );
    this.option2.position(170, 150);
    this.option3.html("3: Envolope " );
    this.option3.position(170, 170);
    this.option4.html("4: Eagle " );
    this.option4.position(170, 190);

    this.input1.position(250, 280);
    this.input2.position(450, 280);
    this.button.position(400, 320);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}

