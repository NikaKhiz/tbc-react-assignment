import terms from "../../terms";

const body = document.querySelector("body");
const footer = document.querySelector(".footer__content");
const termsAndConditions = document.querySelector(".terms__and__conditions");
const termsAndConditionsList = document.querySelector(
  ".terms__and__conditions__content__terms"
);

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
