const menuSection = document.querySelector("#menu-cards");
const btnContainer = document.querySelector(".btn-container");

//--- Loading items ---
window.addEventListener("DOMContentLoaded", () => {
  displayMenus(menu);
  displayMenuBtns();
});

function displayMenus(menuItem) {
  menuSection.innerHTML = "";

  menuItem.map((dish) => {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menu-container");

    const image = document.createElement("img");
    image.src = "images/" + dish.img;
    image.setAttribute("id", "image");

    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "inner-container");

    const menuHeading = document.createElement("div");
    menuHeading.setAttribute("class", "heading");

    const menuTitle = document.createElement("h4");
    menuTitle.innerHTML = dish.title;
    menuTitle.setAttribute("id", "title");

    const priceTag = document.createElement("h4");
    priceTag.innerHTML = dish.price;

    priceTag.setAttribute("id", "price");
    const desc = document.createElement("p");
    desc.innerHTML = dish.desc;
    desc.setAttribute("id", "descripton");

    menuContainer.appendChild(image);
    menuHeading.appendChild(menuTitle);
    menuHeading.appendChild(priceTag);
    innerContainer.appendChild(menuHeading);
    innerContainer.appendChild(desc);
    menuContainer.appendChild(innerContainer);
    menuSection.appendChild(menuContainer);
  });
}

function displayMenuBtns() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  categories.map((category) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.innerText = category;
    categoryBtn.classList.add("filter-btn");
    categoryBtn.setAttribute("type", "button");
    categoryBtn.setAttribute("data-id", category);

    btnContainer.appendChild(categoryBtn);

    const filterBtns = document.querySelectorAll(".filter-btn");

    // --- filter menus ----
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        let category = event.currentTarget.dataset.id;
        const filteredMenu = menu.filter((cat) => {
          if (cat.category === category) {
            return cat;
          }
        });
        if (category === "all") {
          displayMenus(menu);
        } else {
          displayMenus(filteredMenu);
        }
      });
    });
  });
}

function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
}
