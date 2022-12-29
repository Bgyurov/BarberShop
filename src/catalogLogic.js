// local reviews data
const reviews = [{
        id: 1,
        name: "Иван",
        job: "Бръснар в Руски Паметник",
        img: "https://res.cloudinary.com/dsh2bszcx/image/upload/v1672318324/nz/barber6_xq6ccw.png",

    },
    {
        id: 2,
        name: "Веселин",
        job: "Топ бръснар в Академията",
        img: "https://res.cloudinary.com/dsh2bszcx/image/upload/v1672318323/nz/barber22_cbesld.png"

    },
    {
        id: 3,
        name: "Калоян",
        job: "Бръснар в Булевард Левски",
        img: "https://res.cloudinary.com/dsh2bszcx/image/upload/v1672318328/nz/barber38_nnbnx3.png"

    },
    {
        id: 4,
        name: "Николай",
        job: "Старши бръснар в Лозенец",
        img: "https://res.cloudinary.com/dsh2bszcx/image/upload/v1672318332/nz/barber1_smqist.png"

    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    console.log(img.src);
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;

});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;

}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person