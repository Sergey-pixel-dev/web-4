let ResLabel = document.querySelector('#sum');
let ButtonClk = document.querySelector('#submit');
function ButtonClicked(event){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let Sum = 0;
    for (let item of checkboxes){
        Sum += parseFloat(item.value);
    }
    ResLabel.textContent = Sum > 0 ? "Итого: " + Sum.toFixed(2) + " р." : "Ничего не выбрано!";
}
ButtonClk.addEventListener('click', ButtonClicked);

