$(document).ready(function(){
  $("button").click(function(){
    var randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
    var apiUrl = "http://api.alquran.cloud/v1/ayah/" + randomAyahNumber;

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function(data) {
        var ayahText = data.data.text;
        var ayahTranslation = data.data.translation;

        var ayahDataDiv = $("#quran");
        ayahDataDiv.html("<h1>" + ayahText + "</h1><p>" + ayahTranslation + "</p>");
      },
      error: function() {
        alert("Error occurred while fetching data.");
      }
    });
  });
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

  $(".column img").hover(function(){
    $(this).css({"filter": "grayscale(0%)blur(0px)"});
    $(this).parent().css({"max-width": "37%"});
    $(this).parent().siblings().css({"max-width": "31%"});
  }, function(){
    $(this).css({"filter": "grayscale(100%)blur(1px)"});
    $(this).parent().css({"max-width": "33%"});
    $(this).parent().siblings().css({"max-width": "33%"});
  });

  
});