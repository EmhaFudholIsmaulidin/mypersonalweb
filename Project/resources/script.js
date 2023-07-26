function dropdown() {
  var x = document.getElementById("aselole");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  } 
  }

let rapperList = [];
let currentRapperIndex = 0;

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    rapperList = this.responseText.split("\n").filter(Boolean);
    loadNextRapper();
  }
  xhttp.open("GET", "resources/rapper.txt");
  xhttp.send();
}

function loadNextRapper() {
  if (currentRapperIndex >= rapperList.length) {
    currentRapperIndex = 0;
  }

  const rapperName = rapperList[currentRapperIndex];
  document.getElementById("namaRapper").innerHTML = rapperName;

  currentRapperIndex++;
}

document.addEventListener("DOMContentLoaded", function() {
  loadDoc();
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}