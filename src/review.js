const reviewContainer = document.querySelector("#review-article");
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

//--- set starting review ---
let currentItem = 0;

//--- load initial item ---
window.addEventListener("DOMContentLoaded", () => {
  renderreview();
});

function renderreview() {
  reviewContainer.innerHTML = "";

  const item = reviews[currentItem];

  const name = document.createElement("h4");
  name.textContent = item.name;

  const textContainer = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = item.text;

  textContainer.appendChild(text);
  reviewContainer.appendChild(name);
  reviewContainer.appendChild(textContainer);
}

nextbtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  renderreview();
});

prevbtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  renderreview();
});
