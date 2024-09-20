const formElement = document.querySelector("form");

const card_1 = document.querySelector(".card");

const card_2 = document.querySelector(".card-2");

const errorMessage = document.querySelector(".span");



const inputElement = document.querySelector("input");


formElement.addEventListener("submit", e=>{
    e.preventDefault();
    const isValidEmail = /.+@.+\..+/;

    const email = document.querySelector("input").value;

    if(email === ""){
        errorMessage.classList.add("error_message");
        errorMessage.classList.remove("span");
        inputElement.classList.add("error");

    }else if(!isValidEmail.test(email)){
        errorMessage.classList.add("error_message");
        errorMessage.classList.remove("span");
        inputElement.classList.add("error");
    }else{
        card_1.classList.add("hide");
        card_2.classList.remove("hide");
    }
    
})







