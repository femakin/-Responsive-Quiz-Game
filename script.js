//<script type="text/javascript">
    

const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

//questions and options and answers

const questions=[
    {
        q:'The probability that an electronic device produced by a company does not function properly is equal to 0.1. If 10 devices are bought, then the probability, to the nearest thousandth, that 7 devices function properly is',
        options: [0.057,  0.478, 0.001,   0],
        answer: 0 
    },
    {
        q:'When a metallic ball bearing is placed inside a cylindrical container, of radius 2 cm, the height of the water, inside the container, increases by 0.6 cm. The radius, to the nearest tenth of a centimeter, of the ball bearing is',
        options: [1,  1.2,  2, 0.6],
        answer: 1 
    },
    {
        q:'The graphs of the two linear equations a x + b y = c and b x - a y = c, where a, b and c are all not equal to zero,',
        options: ['are parallel',' intersect at one point',' intersect at two points','perpendicular'],
        answer: 3 
    },
    {
        q:'The population of a country increased by an average of 2% per year from 2000 to 2003. If the population of this country was 2 000 000 on December 31, 2003, then the population of this country on January 1, 2000, to the nearest thousand would have been',
        options: ['1 846 000','1 852 000','1 000 000','1 500 000 '],
        answer: 0 
    },
    {
        q:'The exam scores of all 500 students were recorded and it was determined that these scores were normally distributed. If Jane\'s score is 0.8 standard deviation above the mean, then how many, to the nearest unit, students scored above Jane?',
        options: [394,250,400,106],
        answer: 3 
    }
]
//set question and question number
totalQuestionSpan.innerHTML=questions.length;
function load(){
         questionNumberSpan.innerHTML=index+1;
         question.innerHTML=questions[questionIndex].q;
         op1.innerHTML=questions[questionIndex].options[0];
         op2.innerHTML=questions[questionIndex].options[1];
         op3.innerHTML=questions[questionIndex].options[2];
         op4.innerHTML=questions[questionIndex].options[3];
         index++;
}
//checking if option is correct or not
function check(ele){
   //console.log(element.id);to check if the index of the options are in place,when clicked
   if(ele.id==questions[questionIndex].answer){
      ele.classList.add("correct");
      updateAnswerTracker("correct");
      score++;
      console.log("score:"+score);
   }
   else{
       ele.classList.add("wrong");
       updateAnswerTracker("wrong");
   }
   //to disable all other options once the user selects his answer
   disabledOptions()
}
function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        //if the answer clicked is wrong and you wanna show the correct answer
        if(options[i].id==questions[questionIndex].answer) {
            options[i].classList.add("correct");   
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong");
    }
}
   //for the next action button;but first le me check if the user clicked an option,if not,i give alert
   function ValidityState(){
       if(!options[0].classList.contains("disabled")) {
       //if options[0] does not have class"disabled" then alert
       alert("Make your choice")
       }
       else{
        enableOptions();
        randomQuestion();
       }
   }

   function next(){
       ValidityState();
       //let me check for question duplicacy
   }

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;  
    if(index==questions.length) {
            //console.log("quiz Qver")
            quizOver();
        }
        else {
            if(myArray.length>0){
            for(let i=0; i<myArray.length; i++) {
            if(myArray[i]==randomNumber){
                hitDuplicate=1;
                break;
    //the above is if myArray[item] equals randomNumber then hitDuplicate found and if found then hitDuplicate=1,break for the loop
            }
        }
        if(hitDuplicate==1){
            randomQuestion();
        }
        else{
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
    }
            if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
            }
        
        myArray.push(randomNumber);
        //console.log("myArray:"+myArray) found out that some num were repeating itself
       
        }
}
function answerTracker() {
    for(let i=0; i<questions.length; i++) {
        const div=document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}
function updateAnswerTracker(classNam) {
  answerTrackerContainer.children[index-1].classList.add(classNam);
}
 //let question index= any index num of ques but we need random questions,so we shuffle,there we remove index
function quizOver(){
  document.querySelector(".quiz-over").classList.add("show");
  correctAnswerSpan.innerHTML=score;
  totalQuestionSpan2.innerHTML=questions.length;
 // percentage.innerHTML=(score/questions.length)*100 + "%";
}
function tryAgain(){
    window.location.reload();
}
 window.onload=function(){
     randomQuestion();
     this.answerTracker();
}




//</script>
