const openSidebarBtn = document.getElementById('openSidebar');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const ol = document.getElementById('info_ol');
const orderBtn = document.getElementById('order');
let Infoh3 = document.getElementById('info_h3');
let InfoSum = document.getElementById('info_sum');

let SelectedProducts = [];
let AvailableProducts = [{
    product_name: "Бефстроганов",
    description: "Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо",
    price: 549
}, {
    product_name: "Мясная с аджикой",
    description: "Баварские колбаски, острый соус аджика, острые колбаски чоризо, цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус",
    price: 549
}, {
    product_name: "Креветки со сладким чили",
    description: "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо",
    price: 549
}, {
    product_name: "Пицца из половинок",
    description: "Два вкуса в одной пицце 35 см",
    price: 720
}];

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let span = item.nextElementSibling;
        if (span) {
            span.textContent = item.checked ? "Выбрано" : "Выбрать";
        }
    })
});

openSidebarBtn.onclick = function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    Infoh3.textContent = checkboxes.length == 0 ? "Здесь ничего нет(" : "Список выбранных товаров:";
    orderBtn.style.visibility =  checkboxes.length == 0 ? 'hidden' : 'visible';
    ol.innerHTML = '';
    let sum = 0;
    for (let i = 0; i < checkboxes.length; i++) {
            SelectedProducts.push(AvailableProducts[i]);
            let li = document.createElement('li');
            li.textContent = AvailableProducts[i].product_name + "\t\t" + AvailableProducts[i].price + " руб.";
            ol.appendChild(li);
            sum += AvailableProducts[i].price;
    }
    let str = checkboxes.length > 1 ? "позиций" : "позиция";
    InfoSum.textContent = sum > 0 ? "Всего: " + sum + " руб., " + checkboxes.length + " " + str : "";
    sidebar.classList.add('open');
}

closeSidebarBtn.onclick = function () {
    sidebar.classList.remove('open');
}



window.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && event.target !== openSidebarBtn) {
        sidebar.classList.remove('open');
    }
});