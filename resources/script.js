let rapperList = [
  "https://open.spotify.com/embed/track/18ohWhzbMCynq5QJ68ifkW?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/3WQlJpaUUbGtUqAskvGA7c?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1ofhfV90EnYhEr7Un2fWiv?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/59FmZW6HnYFBm9echN4oPG?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/7fHoIcqmjrcpPYvv1iaZk1?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1ZHYJ2Wwgxes4m8Ba88PeK?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1eLU27PPFxBhbp1CBjPh9J?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1Z7C8ClE8UEaH70jCCeJH2?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/5sJGv54fLig0JCNp5MS69R?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1j8bp1BNjMxUJV7nLkSUrb?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/3llSXHFVAnXcGAomKuI7KP?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/3tC8SJpOwJhDg8WGG1NKGR?utm_source=generator&theme=0"
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