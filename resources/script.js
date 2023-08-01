let rapperList = [
    "http://api.alquran.cloud/v1/ayah/262"
];
let currentRapperIndex = 0;

function iterateSong() {
  if (currentRapperIndex >= rapperList.length) {
    currentRapperIndex = 0;
  }

  const rapperName = rapperList[currentRapperIndex];
  document.getElementById("embedSpotify").src = rapperName;

  currentRapperIndex++;
}

var settings = {
  "url": "http://api.alquran.cloud/v1/ayah/262/en.asad",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  const juz = response.data.juz;
  console.log(juz)
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

$(document).ready(function() {
  $(".btt").click(function() {
      $(document).scrollTop(0);
  });
});

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

let tombolgue = document.getElementById("tbl");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setTimeout(function(){
      tombolgue.style.display = "block";
    },0);
  } else {
    setTimeout(function(){
      tombolgue.style.display = "none";
    },0);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}