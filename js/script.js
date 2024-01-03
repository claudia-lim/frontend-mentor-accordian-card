const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const qtext = document.querySelectorAll("h4");
const arrows = document.querySelectorAll(".arrow");


const qaBlocks = question.length;

for (let i = 0; i < qaBlocks; i++) {


    question[i].addEventListener("click", () => {
        qtext[i].classList.toggle("click");
        arrows[i].classList.toggle("click");
        answer[i].classList.toggle("display");
    })
}



// question.addEventListener("click", () => {
//     answer.classList.toggle("display");
// })
