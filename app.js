

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0px";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

function Hjem(morradi){
  const element = document.querySelector(morradi)
  
  window.scroll({
      top: element.offsetTop,
      behavior: 'smooth'
    });
}