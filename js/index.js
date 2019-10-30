// Your code goes here
const theLinks = document.querySelectorAll("a");

theLinks[1].addEventListener("click", event => {
  event.preventDefault();
});

const containerHome = document.querySelector(".container.home");

containerHome.style.color = "blue";

const IntroText = containerHome.querySelector("h2");

IntroText.style.color = "yellow";

const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", event => {
  event.target.style.fontSize = "90px";
});

const text = document.querySelector("p");

const IntroImg = document.querySelector("img");

document.addEventListener("keydown", event => {
  text.textContent += ` ${event.code}`;
});

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  event.target.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");

IntroImg.onwheel = zoom;

window.onload = event => {
  alert("page is fully loaded");
};

const form = document.getElementById("form");

form.addEventListener(
  "focus",
  event => {
    event.target.style.background = "blue";
    event.target.placeholder = "hey";
  },
  true
);

form.addEventListener(
  "blur",
  event => {
    event.target.style.background = "";
  },
  true
);

const h2 = document.querySelector("h2");

function reportWindowSize() {
  h1.textContent = window.innerHeight;
  h2.textContent = window.innerWidth;
  h2.style.background = "black";
}

window.onresize = reportWindowSize;

function hmm() {
  if (h1.textContent === "Fun Bus") {
    return (theLinks[2].style.background = "red");
  }
  return alert("The text content data is wong");
}

hmm();

const mapImg = document.querySelector(".img-content");

window.addEventListener("scroll", event => {
  mapImg.style.display = "none";
});


lastimg.addEventListener("drag",() => {
    alert("and now you are stuck....");
});


var adv = document.querySelector(".btn");

function copyr (){
    alert("this pack is sold out")
};


adv.addEventListener("dblclick", copyr
);


let anchor = document.querySelector(".nav .nav-link");



anchor.addEventListener('focus', (event) => {
    const a = event.target.parentElement;
    a.parentNode.style.background = "red";
  });


  let anchora = document.querySelector(".nav a:nth-of-type(2)");



  anchora.addEventListener('click', () => {
     
      anchora.style.background = "blue";
    });
  





  let head = document.querySelector(".container p");

  head.addEventListener('select', (event) => {
    const b = event.target.parentElement;
    b.parentNode.style.background = "green";
  });