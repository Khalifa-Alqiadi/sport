const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});




// console.log(sliderCount)



const heroData = [
    {
        a: "CLUB",
        h1: "MILIK'S",
        h2: "SPECIAL",
        h3: "VISIT",
        more: "MORE",
        image: "layout/image/2.PNG",
        number: "01"
    },
    {
        a: "CLUB",
        h1: "MILIK'S",
        h2: "SPECIAL",
        h3: "VISIT",
        more: "MORE",
        image: "layout/image/1.PNG",
        number: "02"
    },
    {
        a: "CLUB",
        h1: "MILIK'S",
        h2: "SPECIAL",
        h3: "VISIT",
        more: "MORE",
        image: "layout/image/2.PNG",
        number: "03"
    }
];

document.getElementById("hero-info").innerHTML =`
${heroData.map(function(item){
    return`
        <div class="hero-info">
            <div class="hr1 bg-border position-absolute"></div>
            <div class="hr2 bg-border position-absolute"></div>
            <div class="hero-contact position-absolute">
                <a class="btn fw bg-danger text-white fs-4">${item.a}</a>
                <h1 class="lh fw fs-1 text-white">${item.h1}</h1>
                <h1 class="lh fw fs-1 text-white">${item.h2}</h1>
                <h1 class="lh fw fs-1 text-white">${item.h3}</h1>
                <p class="cat text-uppercase text-white fs-3"><i class="fa fa-wpforms"></i><span>${item.more}</span></p>
            </div>
                <img src="${item.image}" alt="" class="hero-img position-absolute">
            
            <h1 class="number z-1 position-absolute text-white">${item.number}</h1>
        </div>
    `
}).join('')}`

const sectionData = [
    {
        name: "MATCHES",
        date: "27.03.2016",
        descri: "He's becoming the player I think the con be",
        more: "MORE",
        num: "01"
    },
    {
        name: "MATCHES",
        date: "27.03.2016",
        descri: "He's becoming the player I think the con be",
        more: "MORE",
        num: "02"
    },
    {
        name: "MATCHES",
        date: "27.03.2016",
        descri: "He's becoming the player I think the con be",
        more: "MORE",
        num: "03"
    }
];

document.getElementById("all-items").innerHTML = `
${sectionData.map(function(item){
    return`
<div class="items position-relative">
    <p class="date fw"><span class="text-danger">${item.name}</span>/${item.date}</p>
    <h1 class="text-sacound fs-2">${item.descri}</h1>
    <p class="cat"><i class="fa fa-wpforms"></i> <span>${item.more}</span></p>
    <div class="efict position-absolute text-border fw">${item.num}</div>
</div>
`
// document.getElementById("all-items").innerHTML = item.more
console.log(item.more)
}).join('')}`;

const footerDate =[
    {
        name:   "news",
        p1:     "all", 
        p2:     "club news", 
        p3:     "media center", 
        p4:     "photos", 
        p5:     "video", 
        p6:     "rss",
    },
    {
        name:   "tickets",
        p1:     "tickets", 
        p2:     "online ticket siiop", 
        p3:     "vouchers", 
        p4:     "combi-ticket", 
        p5:     "payment", 
        p6:     "contact and booking"
    },
    {
        name:   "matches",
        p1:     "standings", 
        p2:     "fixtures", 
        p3:     "luga ", 
        p4:     "poush cup", 
        p5:     "poush super cup", 
        p6:     ""
    },
    {
        name:   "fans",
        p1:     "fan clubs", 
        p2:     "social media", 
        p3:     "arena tour", 
        p4:     "matchday tour", 
        p5:     "online", 
        p6:     ""
    },
    {
        name:   "business newsletter mobile app",
        p1:     "", 
        p2:     "", 
        p3:     "", 
        p4:     "", 
        p5:     "", 
        p6:     ""
    }
];

document.getElementById("row").innerHTML = `
${footerDate.map(function(item){
    return`
        <div class="card d-flex align-items-start flex-column">
            <div class="card-header">
                <h1 class="fs-3 text-sacound text-uppercase fw">${item.name}</h1>
            </div>
            <div class="card-body">
                <p class="text-ccc fs-4 text-uppercase">${item.p1}</p>
                <p class="text-ccc fs-4 text-uppercase">${item.p2}</p>
                <p class="text-ccc fs-4 text-uppercase">${item.p3}</p>
                <p class="text-ccc fs-4 text-uppercase">${item.p4}</p>
                <p class="text-ccc fs-4 text-uppercase">${item.p5}</p>
                <p class="text-ccc fs-4 text-uppercase">${item.p6}</p>
            </div>
        </div>
`
}).join('')}`;

var sliderHero = Array.from(document.querySelectorAll(".hero .hero-info"));

var sliderCount = sliderHero.length;
var currentSlider = 1;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for(var i = 1; i <= sliderCount; i++){
    var paginationItems = document.createElement('li');
    paginationItems.setAttribute('data-index', i);
    paginationItems.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItems);
    console.log(i)
    
}
document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul')
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
for(var i =0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function (){
        currentSlider = parseInt(this.getAttribute('data-index'))
        theChecker()
    }
}

function theChecker(){
    removeAllActive();
    sliderHero[currentSlider -1].classList.add('active');
    paginationCreatedUl.children[currentSlider -1].classList.add('active')
    
}


function removeAllActive(){
    sliderHero.forEach(function (hero){
        hero.classList.remove('active')
    });
    paginationsBullets.forEach(function (bullets){
        bullets.classList.remove('active')
    })
}
theChecker()
