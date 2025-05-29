const plusButtons = document.querySelectorAll(".plus-btn");

plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const imageIcon = button.children[0];
    const questionTitle = button.closest(".question-title"); // parent container
    const answerText = questionTitle.nextElementSibling; // <p class="answer">
  if (getComputedStyle(answerText).display === "none") {
    imageIcon.classList.add("show");
    imageIcon.src = "./assets/images/icon-minus.svg";
    answerText.style.display = "block";
  } else if (getComputedStyle(answerText).display === "block") {
    imageIcon.classList.remove("show");
    imageIcon.src = "./assets/images/icon-plus.svg";
    answerText.style.display = "none";
  }
});
})


