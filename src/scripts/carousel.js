import partners from "../../partners";

const partnersCarousel = document.querySelector(".partners__carousel");
const carouselArrows = document.querySelectorAll(".partners__arrow");
const carouselDots = document.querySelector(".partners__carousel__dots");

let currentIndex = 0;
let nextIndex = currentIndex + 3;
// get chunk of partners that has to been shown into current slide
let chunkOfPartners = partners.slice(currentIndex, nextIndex);
let isAnimationing = false;
let sliderIntervalId;

generateCarouselItem(chunkOfPartners);
generateCarouselDots();

// add click event to carousel arrows
carouselArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("left")) {
      previouseSlide();
    } else {
      nextSlide();
    }
  });
});

function generateCarouselItem(currentPartners) {
  // setIsAnimationing to true to prevent rendering multiple partners before animation ends
  isAnimationing = true;

  const existingCarouselItem = partnersCarousel.querySelector(
    ".partners__carousel__item"
  );

  if (existingCarouselItem) {
    existingCarouselItem.classList.add("fade-out");

    // Wait for the fade-out animation to complete before removing the element
    existingCarouselItem.addEventListener("animationend", () => {
      existingCarouselItem.remove();
      createNewCarouselItem(currentPartners);
    });
  } else {
    // If there's no existing carousel item, create a new one directly
    createNewCarouselItem(currentPartners);
  }

  // Clear existing interval before setting a new one
  clearInterval(sliderIntervalId);

  sliderIntervalId = setInterval(() => {
    nextSlide();
  }, 5000);
}

function createNewCarouselItem(partnersArr) {
  // Create carousel item
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("partners__carousel__item");

  if (partnersArr.length > 1) {
    carouselItem.classList.add("filled");
  }

  // Loop over sliced partners and append all of them to carousel item
  partnersArr.forEach((item) => {
    const partner = document.createElement("img");
    partner.setAttribute("src", item.image);
    partner.setAttribute("alt", item.title);
    carouselItem.appendChild(partner);
  });
  carouselItem.classList.add("fade-in");
  partnersCarousel.append(carouselItem);

  // setIsAniimationing false again to indicate that animation ends after generating changing slide
  isAnimationing = false;
}

function nextSlide() {
  if (isAnimationing) {
    return;
  }

  // Clear the interval when arrows are clicked
  clearInterval(sliderIntervalId);
  currentIndex += 3;
  if (currentIndex >= partners.length) {
    currentIndex = 0;
  }
  chunkOfPartners = partners.slice(currentIndex, currentIndex + 3);
  generateCarouselItem(chunkOfPartners);
}

function previouseSlide() {
  if (isAnimationing) {
    return;
  }

  // Clear the interval when arrows are clicked
  clearInterval(sliderIntervalId);
  currentIndex -= 3;
  if (currentIndex < 0) {
    currentIndex = partners.length - 1;
  }
  chunkOfPartners = partners.slice(currentIndex, currentIndex + 3);
  generateCarouselItem(chunkOfPartners);
}

// generates carousel dots according to partners array length
function generateCarouselDots() {
  const numOfDots = Math.ceil(partners.length / 3);

  for (let i = 0; i < numOfDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("partners__carousel__dots__item");
    carouselDots.append(dot);
    dot.addEventListener("click", () => carouselDotActions(i));
  }
}

// handle slider action when user clicks on dots
function carouselDotActions(dotIndex) {
  if (isAnimationing) {
    return;
  }

  // Clear the interval when dots are clicked
  clearInterval(sliderIntervalId);
  currentIndex = dotIndex * 3;
  nextIndex = currentIndex + 3;
  chunkOfPartners = partners.slice(currentIndex, nextIndex);
  generateCarouselItem(chunkOfPartners);
}
