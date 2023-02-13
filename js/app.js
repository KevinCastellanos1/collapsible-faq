function switchLanguage(lang) {
    if (lang === "es") {
      enFAQ.style.display = "none";
      esFAQ.style.display = "block";
    } else {
      enFAQ.style.display = "block";
      esFAQ.style.display = "none";
    }
}
  
const englishButton = document.querySelector("#english-button");
const spanishButton = document.querySelector("#spanish-button");

englishButton.addEventListener("click", function() {
  window.location.href = "index.html";
});

spanishButton.addEventListener("click", function() {
  window.location.href = "faq-es.html";
});


var toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.classList.toggle('active')        
    });
});

