$(document).ready(function(){
  $("button").click(function(){
    var randomSurahNumber = Math.floor(Math.random() * 114) + 1;
    var apiUrl = "https://equran.id/api/v2/surat/" + randomSurahNumber;

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function(data) {  
        console.log(data);
        
        const ayahData = data.data.ayat;
        const ayahDataLength = ayahData.length;
        const randomIndex = Math.floor(Math.random() * ayahDataLength);

        var tarab = ayahData[randomIndex].teksArab;
        var terjemahan = ayahData[randomIndex].teksIndonesia;
        var namsurah = data.data.namaLatin;

        var ayahDataDiv = $("#quran");
        ayahDataDiv.html("<h1>" + tarab + "</h1><p>" + terjemahan + "</p><br><p>QS. " + namsurah + " : " + (randomIndex+1)).css({"display": "block"});
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
  
  $(window).onscroll(function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $(".btt").css({"display": "block"});
    } else {
      $(".btt").css({"display": "none"});
    }
  });

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

  // Masih tahap pengerjaan!!!
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}