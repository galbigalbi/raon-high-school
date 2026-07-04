/* ==========================================================
   HEADER SCROLL
========================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(6,10,16,.92)";
        header.style.backdropFilter = "blur(18px)";

    } else {

        header.style.background = "rgba(6,10,16,.55)";
        header.style.backdropFilter = "blur(14px)";

    }

});


/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

".section-head, .exchange-card, .exchange-text, .campus-card, .culture-card, .club-card, .calendar-item, .special-card, .dorm-card, .facility-card, .character-visual, .character-content, .character-selector"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.01,
rootMargin:"0px 0px -120px 0px"
});

revealElements.forEach(el => observer.observe(el));


/* ==========================================================
   CHARACTER DATA
========================================================== */

const characterData = {

    seol:{

        image:"assets/character/seol.png",

        grade:"3학년 · 학생회장",

        name:"권설",

        species:"Snow Leopard",

        quote:"규칙은 지켜주세요.",

        description:"냉정하고 완벽주의적인 학생회장. 최초의 인간 교환학생인 당신을 가장 경계하는 학생이다."

    },

    baekya:{

        image:"assets/character/baekya.png",

        grade:"3학년 · 보건부",

        name:"서백야",

        species:"White Snake",

        quote:"흥미롭네.",

        description:"늘 미소를 띠고 있지만 속을 알 수 없는 보건부 학생. 인간을 누구보다 흥미롭게 관찰한다."

    },

    haon:{

        image:"assets/character/haon.png",

        grade:"1학년 · 반장",

        name:"윤하온",

        species:"Lop Rabbit",

        quote:"괜찮아요?",

        description:"다정하고 성실한 1학년 반장. 새로운 학교생활에서 가장 먼저 손을 내밀어 줄 학생."

    },

    doram:{

        image:"assets/character/doram.png",

        grade:"1학년 · 사진부",

        name:"강도람",

        species:"Squirrel",

        quote:"같이 가자!",

        description:"호기심 많은 사진부 에이스. 학교 소식이라면 누구보다 빠르게 알고 있다."

    },

    eungyeom:{

        image:"assets/character/eungyeom.png",

        grade:"2학년 · 방송부",

        name:"주은겸",

        species:"Crow",

        quote:"재밌는 일이 생겼네?",

        description:"학교 최고의 정보통. 소문과 사건을 누구보다 빠르게 찾아다닌다."

    },

    geonwoo:{

        image:"assets/character/geonwoo.png",

        grade:"3학년 · 체육부 주장",

        name:"차건우",

        species:"Golden Retriever",

        quote:"내가 도와줄게!",

        description:"밝고 듬직한 체육부 주장. 누구보다 먼저 당신에게 다가오는 선배."

    }

};
/* ==========================================================
   CHARACTER CHANGE
========================================================== */

const characterImage = document.getElementById("characterImage");
const characterGrade = document.getElementById("characterGrade");
const characterName = document.getElementById("characterName");
const characterSpecies = document.getElementById("characterSpecies");
const characterQuote = document.getElementById("characterQuote");
const characterDescription = document.getElementById("characterDescription");
const characterDetail = document.getElementById("characterDetail");

const characterButtons = document.querySelectorAll(".character-btn");

let changing = false;

characterButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (changing) return;

        const key = button.dataset.character;

        const data = characterData[key];

        changing = true;

        characterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        characterImage.classList.add("fade");
        characterDetail.classList.add("fade");

        setTimeout(() => {

            characterImage.src = data.image;
            characterImage.alt = data.name;

            characterGrade.textContent = data.grade;
            characterName.textContent = data.name;
            characterSpecies.textContent = data.species;
            characterQuote.textContent = data.quote;
            characterDescription.textContent = data.description;

            characterImage.classList.remove("fade");
            characterDetail.classList.remove("fade");

            changing = false;

        },250);

    });

});



/* ==========================================================
   PROGRESS BAR
========================================================== */

const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const percent = (scrollTop / height) * 100;

    progressBar.style.width = percent + "%";

});



/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});



/* ==========================================================
   HERO PARALLAX
========================================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    hero.style.backgroundPosition=`center ${window.scrollY*0.35}px`;

});



/* ==========================================================
   CHARACTER IMAGE PARALLAX
========================================================== */

const character=document.querySelector(".character-visual img");

window.addEventListener("mousemove",(e)=>{

    if(!character) return;

    const x=(window.innerWidth/2-e.clientX)/60;

    const y=(window.innerHeight/2-e.clientY)/60;

    character.style.transform=`translate(${x}px,${y}px)`;

});



/* ==========================================================
   SECTION STAGGER ANIMATION
========================================================== */

document.querySelectorAll(".campus-card,.club-card,.culture-card,.calendar-item,.special-card,.dorm-card,.facility-card,.life-card,.exchange-card").forEach((card,index)=>{

    card.style.transitionDelay=`${index*0}ms`;

});