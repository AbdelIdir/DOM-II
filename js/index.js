// Your code goes here

let introimage = document.querySelector(".intro img");


let col = function(){
    alert("hey stay out of the image !");
};


introimage.addEventListener("dbclick",col);


let h1 = document.querySelector("h1");



let disa = function (){
    h1.textContent =  "This is new";
    alert(" dont modify this again");
}

h1.addEventListener("mouseover",disa);

const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
    if (e.key === "b"){
    body.style.background = "blue";
    }
})


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector(".img-content");

  el.addEventListener('wheel', zoom);


  window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus website !');
  });


  

  
  function whatshappening() {

    console.log("resizing the browser");
  }
  


  window.onresize = whatshappening
  ;

var advh2 = document.querySelector(".text-content p:nth-of-type(2)");

function colorch () {
    advh2.style.color = "blue";
}


  document.onscroll = colorch;


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

  let lastimg = document.querySelector(".content-destination img");

  lastimg.addEventListener("drag",() => {
      alert("and now you are stuck....");
  });

  nav.addEventListener("click",function(event){
    event.preventDefault();
      })