

let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector(".button");
let goku = document.querySelector(".goku");
let bulma = document.querySelector (".bulma");
let vegeta = document.querySelector (".vegeta");
let beeruss = document.querySelector (".beeruss");

button.addEventListener("click", function() {
    console.log("check if button working");

    let answrer1 = input1.value;
    console.log("answer1");

    let answrer2 = input2.value;
    console.log("answer2");

    if(answrer1 <= 50 && answrer2 === "yes"){
      goku.style.display="block";
    } else if (answrer1 >= 51 && answrer2 === "yes") {
    vegeta.style.display="block";
    } else if (answrer1 <= 50 && answrer2 === "no"){
      bulma.style.display="block";
    } else if (answrer1 >= 51 && answrer2 === "no"){
     } beeruss.style.display = "block";
        console.log("check");
    
});

