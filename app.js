var quizQuestions = [
    {
      num: 1,
      question: "HTML stand for",
      Option: {
        a: "Hyper text markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      answer: "Hyper text markup Language",
    },
    {
      
      num: 2,
      question: "Which type of JavaScript Languages is",
      Option: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      answer: "Object-Base",
    },
    {
      num: 3,
      question: "The 'function' and  'var' are known as:",
      Option: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      answer: "Declaration statements",
    },
    {
      num: 4,
      question: "who is the present president of pakistan",
      Option: {
        a: "Arif Alvi",
        b: "Imran Khan",
        c: "Nawaz Sharif",
        d: "Zardari",
      },
      answer: "Arif Alvi",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      Option: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      answer: "5",
    },
    {
      num: 6,
      question: "How many total surah in quran",
      Option: {
        a: "113",
        b: "114",
        c: "112",
        d: "111",
      },
      answer: "114",
    },
    {
      num: 7,
      question: "The correct sequence of HTML tags for starting a webpage is",
      Option: {
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Title , Head,  Body",
      },
      answer: "HTML, Head, Title, Body",
    },
  ];

var HtmlQues = document.getElementById("HtmlQues") 
var htmlOptions = document.getElementsByClassName("htmlOption")
var nextQuestions = document.getElementById("nextQuestion")
var counterValue = document.getElementById("counterValue")
var quizBox = document.getElementById("quizBox")
// console.log(quizQuestions[0].question);
// console.log(htmlOptions);

var counter = 0
var score = 0
var result = document.getElementById("result")

function setQuestion() {
  HtmlQues.innerHTML = quizQuestions[counter].question;
  htmlOptions[0].innerHTML = quizQuestions[counter].Option.a;
  htmlOptions[1].innerHTML = quizQuestions[counter].Option.b;
  htmlOptions[2].innerHTML = quizQuestions[counter].Option.c;
  htmlOptions[3].innerHTML = quizQuestions[counter].Option.d;
}   
function nextQue(){
counter++;
console.log(counter);
if(counter < quizQuestions.length){
  setQuestion();
counterValue.innerHTML = `${counter + 1} / ${quizQuestions.length}`;
}else{
  console.log("End");
  quizBox.style.display ="none";
  result.className = "show";  
  result.innerHTML = score;
}
nextQuestions.className="hide"
// counterValue.innerHTML = counter + 1 `/ ${quizQuestions.length}`
for (var i = 0;i < htmlOptions.length; i++){
  htmlOptions[i].classList.remove("disabled")
  htmlOptions[i].style.backgroundColor = "#f0f8ff51"
  }
}



function checkAns(e) {
  nextQuestions.className="show"
console.log(e.innerHTML==quizQuestions[counter].answer);
if(e.innerHTML== quizQuestions[counter].answer){ 
  score +=  10
  console.log(score);
  e.style.backgroundColor ="#AFE1AF"
}else{
  e.style.backgroundColor ="#F07B62"
 
  
for (var i = 0;i <htmlOptions.length;i++){
if(htmlOptions[i].innerHTML == quizQuestions[counter].answer){
  htmlOptions[i].style.backgroundColor ="#AFE1AF"
  
}
}

}

for (var i = 0;i <htmlOptions.length;i++){
  htmlOptions[i].className +=" disabled"
}
}

