import terms from "../terms";

const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__menu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer__content");
const termsAndConditions = document.querySelector(".terms__and__conditions");
const termsAndConditionsList = document.querySelector(
  ".terms__and__conditions__content__terms"
);
const faqContainer = document.querySelector(".faq__questions");
const answers = document.querySelectorAll(".faq__questions__item__content");
const arrows = document.querySelectorAll(".arrow");

// open mobile menu
hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");
  mobileMenu.classList.toggle("is__menu__open");
  body.classList.toggle("noscroll");
});

// sticky header on scroll
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// terms and conditions sidebar functional
footer.addEventListener("click", (e) => {
  // check if user clicked terms and conditions button if not take no action
  if (!e.target.closest(".terms__and__conditions__btn")) {
    return;
  }

  // open terms and conditions sidebar
  body.classList.toggle("noscroll");
  termsAndConditions.classList.toggle("is__conditions__open");
});

termsAndConditions.addEventListener("click", (e) => {
  // check if user clicked one of close buttons if not take no action
  if (!e.target.closest(".terms__and__conditions__close")) {
    return;
  }

  // close terms and conditions sidebar
  body.classList.toggle("noscroll");
  termsAndConditions.classList.toggle("is__conditions__open");
});

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
    answers.forEach((item) => {
      item.classList.remove("active");
    });
    arrows.forEach((arrowElement) => {
      arrowElement.classList.remove("up");
    });
    answer.classList.add("active");
    arrow.classList.add("up");
  } else {
    answer.classList.remove("active");
    arrow.classList.remove("up");
  }
});

// populate terms and conditions list according to provided terms array
populateTermsAndConditionsList(terms);

function populateTermsAndConditionsList(termsArray) {
  termsArray.forEach((term, index) => {
    // loop over terms and conditions array and create list item
    const item = document.createElement("div");
    item.classList.add("terms__and__conditions__content__terms__item");

    // create heading for list item and add necessary classes
    const itemHeading = document.createElement("h5");
    itemHeading.innerText = term.title;
    itemHeading.classList.add(
      "terms__and__conditions__content__terms__item__heading"
    );
    if (index === 0) {
      itemHeading.classList.add("main");
    }

    // append heading element to terms list item
    item.append(itemHeading);

    // loop over curret terms conditions array and create element for each of them
    term.conditions.forEach((condition) => {
      const itemDescription = document.createElement("p");
      itemDescription.classList.add(
        "terms__and__conditions__content__terms__item__description"
      );
      itemDescription.innerText = condition;

      // append description element to the list item
      item.append(itemDescription);
    });

    // append whole list item to the terms and conditions list
    termsAndConditionsList.append(item);
  });
}
