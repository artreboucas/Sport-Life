var faq = document.getElementsByClassName("question");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

