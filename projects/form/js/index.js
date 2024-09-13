let FirstNameField = document.querySelector("#firstName");
let LastNameField = document.querySelector("#lastName");
let InputBtn = document.querySelector("#submit");
let ResponseField = document.querySelector("#response");

let RegExp = /^[А-Я][а-я]+$/

InputBtn.addEventListener("click", ButtonClick);

function ButtonClick(event) {
    event.preventDefault();
    if(FirstNameField.value.search(RegExp) != -1 && LastNameField.value.search(RegExp) != -1){
        ResponseField.textContent = `Здравствуйте, ${FirstNameField.value} ${LastNameField.value}!`;
    }
    else{
        ResponseField.textContent = "Проверьте правильность написания имени и фамилии! (Они должны начинаться с большой буквы).";
    }
    
}