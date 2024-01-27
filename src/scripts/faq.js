const faqContainer = document.querySelector(".faq__questions");
const faqAnswers = document.querySelectorAll(".faq__questions__item__content");
const faqArrows = document.querySelectorAll(".arrow");

faqContainer.addEventListener("click", (e) => {
  // check if user clicked question if take no action
  const question = e.target.closest(".faq__questions__item__heading");
  if (!question) {
    return;
  }

  const answer = question.nextElementSibling;
  const arrow = question.querySelector(".arrow");
  // close opened answers if there is existed ones if not open current one
  if (!answer.classList.contains("active")) {
    faqAnswers.forEach((item) => {
      item.classList.remove("active");
    });
    faqArrows.forEach((arrowElement) => {
      arrowElement.classList.remove("up");
    });
    answer.classList.add("active");
    arrow.classList.add("up");
  } else {
    answer.classList.remove("active");
    arrow.classList.remove("up");
  }
});
