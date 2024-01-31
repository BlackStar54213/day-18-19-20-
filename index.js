const changer = document.getElementsByClassName("changer");
const steps = document.getElementsByClassName("no");
const plans = document.getElementsByClassName("cards");
const addition = document.getElementsByClassName("yearlydet");
const prices = document.getElementsByClassName("prices");
const addonprice = document.getElementsByClassName("addonprice");
var n = 0;
var iconid = 0;
var totalp = 0;
var selectedPlan;
var planner = "Monthly";
const icon = document.getElementById("icon");
const toggle = document.getElementById("toggle");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userContact = document.getElementById("contact");
const abc = document.getElementById("abc");
const planPrice = document.getElementById("planPrice");
const btn = document.getElementById("btn");
const addona = document.getElementById("addona");
const total = document.getElementById("total");

const formEl = document.querySelector("form");

var pricetagsyr = ["$90/yr", "$120/yr", "$150/yr"];
var pricetagsmo = ["$9/mo", "$12/mo", "$15/mo"];
var pricetagsmoint = [9, 12, 15];
var addonpricetagsmo = ["$1/mo", "$2/mo", "$2/mo"];
var addonpricetagsmoint = [1, 2, 2];
var addonpricetagsyr = ["$10/yr", "$20/yr", "$20/yr"];
var chosenplan = "Arcade";

for (let i = 0; i < changer.length; i++) {
    changer[i].style.display = "none";
}

changer[n].style.display = "flex";

function nextSlide() {
    changer[n].style.display = "none";
    steps[n].setAttribute("id", "");
    n++;
    changer[n].style.display = "flex";
    steps[n].setAttribute("id", "current");
}
function prevSlide() {
    changer[n].style.display = "none";
    steps[n].setAttribute("id", "");
    n--;
    changer[n].style.display = "flex";
    steps[n].setAttribute("id", "current");
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    nextSlide();
})

function choosePlan(k) {
    switch (k) {
        case 0:
            for (let index = 0; index < plans.length; index++) {
                plans[index].removeAttribute("id");
            }
            plans[k].setAttribute("id", "currentcat");
            chosenplan = "Arcade";

            letGo();
            break;

        case 1:
            for (let index = 0; index < plans.length; index++) {
                plans[index].removeAttribute("id");
            }
            plans[k].setAttribute("id", "currentcat");
            chosenplan = "Advanced";

            letGo();
            break;

        case 2:
            for (let index = 0; index < plans.length; index++) {
                plans[index].removeAttribute("id");
            }
            plans[k].setAttribute("id", "currentcat");
            chosenplan = "Pro";

            letGo();
            break;

        default:
            alert("option doesn't exist");
            break;
    }
    console.log(chosenplan);
}

toggle.addEventListener("click", function toggleGo() {
    switch (iconid) {
        case 0:
            icon.style.transform = "translateX(182%)";
            iconid = 1;
            planner = "Yearly";
            for (let index = 0; index < addition.length; index++) {
                addition[index].style.display = "block";
                prices[index].innerHTML = `${pricetagsyr[index]}`
                addonprice[index].innerHTML = `${addonpricetagsyr[index]}`
                abc.innerHTML = `${chosenplan}(Yearly)`;
                switch (chosenplan) {
                    case "Arcade":
                        planPrice.innerHTML = `${pricetagsyr[0]}`;
                        break;
                    case "Advanced":
                        planPrice.innerHTML = `${pricetagsyr[1]}`;
                        break;
                    case "Pro":
                        planPrice.innerHTML = `${pricetagsyr[2]}`;
                        break;

                    default:
                        break;
                }
            }
            break;

        default:
            icon.style.transform = "translateX(0%)";
            iconid = 0;
            planner = "Monthly";
            for (let index = 0; index < addition.length; index++) {
                addition[index].style.display = "none";
                prices[index].innerHTML = `${pricetagsmo[index]}`;
                addonprice[index].innerHTML = `${addonpricetagsmo[index]}`;
                abc.innerHTML = `${chosenplan}(Monthly)`;
            }

            switch (chosenplan) {
                case "Arcade":
                    planPrice.innerHTML = `${pricetagsmo[0]}`;
                    break;
                case "Advanced":
                    planPrice.innerHTML = `${pricetagsmo[1]}`;
                    break;
                case "Pro":
                    planPrice.innerHTML = `${pricetagsmo[2]}`;

                    break;

                default:
                    break;
            }
            break;
    }
})

function letGo() {
    switch (chosenplan) {
        case "Arcade":

            switch (planner) {
                case "Yearly":
                    planPrice.innerHTML = `${pricetagsyr[0]}`;
                    abc.innerHTML = `${chosenplan}(Yearly)`;
                    break;

                default:
                    planPrice.innerHTML = `${pricetagsmo[0]}`;
                    abc.innerHTML = `${chosenplan}(Monthly)`;
                    break;
            }
            break;
        case "Advanced":

            switch (planner) {
                case "Yearly":
                    planPrice.innerHTML = `${pricetagsyr[1]}`;
                    abc.innerHTML = `${chosenplan}(Yearly)`;
                    break;

                default:
                    planPrice.innerHTML = `${pricetagsmo[1]}`;
                    abc.innerHTML = `${chosenplan}(Monthly)`;
                    break;
            }
            break;
        case "Pro":

            switch (planner) {
                case "Yearly":
                    planPrice.innerHTML = `${pricetagsyr[2]}`;
                    abc.innerHTML = `${chosenplan}(Yearly)`;
                    break;

                default:
                    planPrice.innerHTML = `${pricetagsmo[2]}`;
                    abc.innerHTML = `${chosenplan}(Monthly)`;
                    break;
            }
            break;

        default:
            break;
    }
}

function change() {
    changer[n].style.display = "none";
    steps[n].setAttribute("id", "");
    n = 1;
    changer[n].style.display = "flex";
    steps[n].setAttribute("id", "current");
}

function validate() {
    addona.innerHTML = "";
    if (document.getElementById('online').checked) {
        const addrow = document.createElement("div");
        const left = document.createElement("div");
        const right = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        addrow.setAttribute("class", "addrow");
        left.setAttribute("class", "left");
        right.setAttribute("class", "right");

        addona.appendChild(addrow);
        addrow.appendChild(left);
        addrow.appendChild(right);
        left.appendChild(h5);

        h5.innerHTML = `Online Service`;
        switch (planner) {
            case "Yearly":
                right.innerHTML = `${addonpricetagsyr[0]}`;
                break;

            default:
                right.innerHTML = `${addonpricetagsmo[0]}`;
                break;
        }
    }

    if (document.getElementById('storage').checked) {
        const addrow = document.createElement("div");
        const left = document.createElement("div");
        const right = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        addrow.setAttribute("class", "addrow");
        left.setAttribute("class", "left");
        right.setAttribute("class", "right");

        addona.appendChild(addrow);
        addrow.appendChild(left);
        addrow.appendChild(right);
        left.appendChild(h5);

        h5.innerHTML = `Larger Storage`;
        switch (planner) {
            case "Yearly":
                right.innerHTML = `${addonpricetagsyr[1]}`;
                break;

            default:
                right.innerHTML = `${addonpricetagsmo[1]}`;
                break;
        }
    }

    if (document.getElementById('profile').checked) {

        const addrow = document.createElement("div");
        const left = document.createElement("div");
        const right = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        addrow.setAttribute("class", "addrow");
        left.setAttribute("class", "left");
        right.setAttribute("class", "right");

        addona.appendChild(addrow);
        addrow.appendChild(left);
        addrow.appendChild(right);
        left.appendChild(h5);

        h5.innerHTML = `Customizable Service`;
        switch (planner) {
            case "Yearly":
                right.innerHTML = `${addonpricetagsyr[2]}`;
                break;

            default:
                right.innerHTML = `${addonpricetagsmo[2]}`;
                break;
        }
    }

}
function calculate() {
    switch (planner) {
        case "Monthly":
            switch (chosenplan) {
                case "Arcade":
                    totalp += pricetagsmoint[0];
                    break;
                case "Advanced":
                    totalp += pricetagsmoint[1];
                    break;

                default:
                    totalp += pricetagsmoint[2];
                    break;
            }

            if (document.getElementById('online').checked) {
                totalp += addonpricetagsmoint[0];
            }
            if (document.getElementById('storage').checked) {
                totalp += addonpricetagsmoint[1];
            }
            if (document.getElementById('profile').checked) {
                totalp += addonpricetagsmoint[2];
            }
            total.innerHTML = `$ ${totalp}/mo`
            totalp = 0;
            break;

        default:
            switch (chosenplan) {
                case "Arcade":
                    totalp += pricetagsint[0] * 10;
                    break;
                case "Advanced":
                    totalp += pricetagsmoint[1] * 10;
                    break;

                default:
                    totalp += pricetagsmoint[2] * 10;
                    break;
            }

            if (document.getElementById('online').checked) {
                totalp += addonpricetagsmoint[0] * 10;
            }
            if (document.getElementById('storage').checked) {
                totalp += addonpricetagsmoint[1] * 10;
            }
            if (document.getElementById('profile').checked) {
                totalp += addonpricetagsmoint[2] * 10;
            }
            total.innerHTML = `$ ${totalp}/yr`
            totalp = 0;
            break;
            break;
    }

}