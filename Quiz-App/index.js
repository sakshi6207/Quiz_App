const quizDB=[
    {
      question: " 1. What is CSS?",
a:" CSS is a style sheet language",
b:" CSS is designed to separate the presentation and content, including layout, colors, and fonts",
c:" CSS is the language used to style the HTML documents",
d:" All of the mentioned",
ans:"ans4"
    },
    {
    question: " 2. Which of the following tag is used to embed css in html page?",
a:  " <css>",
b: "<!DOCTYPE html>",
c: "<script>",
d: "<style></style>",
ans:"ans4"
    },{
    question: "3 Which of the following CSS selectors are used to specify a group of elements?",
a:  " tag",
b: " id",
c: " both class and tag",
d: "class",
ans:"ans4"
    },{
        question: "4. Which of the following has introduced text, list, box, margin, border, color, and background properties?",
a:  " HTML",
b: "CSS",
c: "PHP",
d: "Ajax",
ans:"ans2"
    },
    {
        question: "5. Which of the following CSS framework is used to create a responsive design?",
        a:  "django",
        b: "rails",
        c: "bootstrap",
        d: "lawrell",
        ans:"ans3"  
    },
    {
        question: "6. Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        a:  " tag",
        b: " id",
        c: " both class and tag",
        d: "class",
        ans:"ans2"
    },
    {
        question: "7. Which of the following type of HTML tag is used to define an internal style sheet?",
a:  "<script>",
b: "<link>",
c: "<style>",
d: "None of these",
ans:"ans3"
    },
    {
        question: "8. Which of the following CSS property is used to make the text bold?",
a:  "text-decoration: bold",
b: "font-weight: bold",
c: "font-style: bold",
d: " text-align: bold",
ans:"ans2"
    },
    {
        question: "9.Which of the following are the CSS Extension Prefixes for Webkit?",
a:  "-chrome",
b: "-o-",
c: "-web",
d: "-webkit",
ans:"ans4"
    },
    {
        question: "10. Which of the following is the first CSS specification to become an official W3C Recommendation?",
a:  "CSS level 2.1",
b: "CSS level 1",
c: "(X)HTML CSS",
d: " CSS level 2",
ans:"ans2"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const Submit=document.querySelector("#submit");
const showscore=document.querySelector("#showscore")

const answers=document.querySelectorAll('.answer');

let qcount=0;
let score=0;
const loadquestion=()=> {
    
    const questionlist=quizDB[qcount];
    question.innerText=questionlist.question;

    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
}


loadquestion();
 const getcheckanswer=()=>{
let answer;
answers.forEach((currans) => {
if(currans.checked){
answer=currans.id;
}
})
return answer;
};

const dselect=()=>{
    answers.forEach((currans)=>currans.checked=false)
}

Submit.addEventListener('click',()=>{
    const checkans=getcheckanswer();
   if(checkans==quizDB[qcount].ans){
    score++;
   };
   qcount++;
   dselect();
   
   if(qcount<quizDB.length){
    loadquestion();
}else{
    showscore.innerHTML=`<h3> You scored  ${score}/${quizDB.length} </h3>

    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showscore.classList.remove('scorearea');

    
}
   
});