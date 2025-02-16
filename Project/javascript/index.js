var activityContainer = document.getElementById("activity-container");
var footer = document.getElementById("footer");
var blank = [];
if (localStorage.getItem("List Product") === null) {
  localStorage.setItem("List Product", JSON.stringify(blank));
}
// Movies
var movies = document.getElementById("movies");
var show = document.getElementById("show-detail-1");
var hide = document.getElementById("hide-detail-1");

show.addEventListener("click", () => {
  movies.style.display = "block";
  activityContainer.style.display = "none";
  footer.style.marginTop = "80vh";
});
hide.addEventListener("click", () => {
  movies.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

// Carve
var pumpkinCarve = document.getElementById("pumpkin-carving");
var show2 = document.getElementById("show-detail-2");
var hide2 = document.getElementById("hide-detail-2");

show2.addEventListener("click", () => {
  pumpkinCarve.style.display = "block";
  activityContainer.style.display = "none";
  footer.style.marginTop = "80vh";
});
hide2.addEventListener("click", () => {
  pumpkinCarve.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

// Dining
var dining = document.getElementById("dining");
var show3 = document.getElementById("show-detail-3");
var hide3 = document.getElementById("hide-detail-3");

show3.addEventListener("click", () => {
  dining.style.display = "block";
  activityContainer.style.display = "none";
  footer.style.marginTop = "80vh";
});
hide3.addEventListener("click", () => {
  dining.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

// Dance
var dance = document.getElementById("dance");
var show4 = document.getElementById("show-detail-4");
var hide4 = document.getElementById("hide-detail-4");

show4.addEventListener("click", () => {
  dance.style.display = "block";
  activityContainer.style.display = "none";
  footer.style.marginTop = "80vh";
});
hide4.addEventListener("click", () => {
  dance.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

// Art
var art = document.getElementById("art");
var show5 = document.getElementById("show-detail-5");
var hide5 = document.getElementById("hide-detail-5");

show5.addEventListener("click", () => {
  art.style.display = "block";
  activityContainer.style.display = "none";
  footer.style.marginTop = "80vh";
});
hide5.addEventListener("click", () => {
  art.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

// Quiz
var quiz = document.getElementById("quiz");
var show6 = document.getElementById("show-detail-6");
var hide6 = document.getElementById("hide-detail-6");

show6.addEventListener("click", () => {
  quiz.style.display = "block";
  activityContainer.style.display = "none";
});
hide6.addEventListener("click", () => {
  quiz.style.display = "none";
  activityContainer.style.display = "block";
  footer.style.marginTop = "80px";
});

var listProduct = JSON.parse(localStorage.getItem("List Product"));
var totalQuantity = 0;
for (let i = 0; i < listProduct.length; i++) {
  totalQuantity = totalQuantity + listProduct[i].number;
}
if (totalQuantity > 99) {
  document.getElementById("total-quantity-home").innerHTML = "m";
} else {
  document.getElementById("total-quantity-home").innerHTML = totalQuantity;
}

function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

var searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  var searchValue = e.target.value.toUpperCase();
  console.log(searchValue);
  if (searchValue.length == "") {
    document.getElementById("search-list").style.display = "none";
  }
  if (searchValue.length > 0) {
    document.getElementById("search-list").style.display = "block";
  }
  if (document.getElementById("WITCH'S HAT").innerHTML.includes(searchValue)) {
    document.getElementById("WITCH'S HAT").style.display = "block";
  }
  if (
    document.getElementById("WITCH'S HAT").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("WITCH'S HAT").style.display = "none";
  }
  if (document.getElementById("WITCH'S CAPE").innerHTML.includes(searchValue)) {
    document.getElementById("WITCH'S CAPE").style.display = "block";
  }
  if (
    document.getElementById("WITCH'S CAPE").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("WITCH'S CAPE").style.display = "none";
  }
  if (
    document.getElementById("WITCH'S BROOM").innerHTML.includes(searchValue)
  ) {
    document.getElementById("WITCH'S BROOM").style.display = "block";
  }
  if (
    document.getElementById("WITCH'S BROOM").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("WITCH'S BROOM").style.display = "none";
  }
  if (
    document.getElementById("JACK-O'-LANTERN").innerHTML.includes(searchValue)
  ) {
    document.getElementById("JACK-O'-LANTERN").style.display = "block";
  }
  if (
    document
      .getElementById("JACK-O'-LANTERN")
      .innerHTML.includes(searchValue) === false
  ) {
    document.getElementById("JACK-O'-LANTERN").style.display = "none";
  }
  if (
    document.getElementById("GHOST LIGHT BULB").innerHTML.includes(searchValue)
  ) {
    document.getElementById("GHOST LIGHT BULB").style.display = "block";
  }
  if (
    document
      .getElementById("GHOST LIGHT BULB")
      .innerHTML.includes(searchValue) === false
  ) {
    document.getElementById("GHOST LIGHT BULB").style.display = "none";
  }
  if (document.getElementById("WALL CLOCK").innerHTML.includes(searchValue)) {
    document.getElementById("WALL CLOCK").style.display = "block";
  }
  if (
    document.getElementById("WALL CLOCK").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("WALL CLOCK").style.display = "none";
  }
  if (document.getElementById("STUFFED TOYS").innerHTML.includes(searchValue)) {
    document.getElementById("STUFFED TOYS").style.display = "block";
  }
  if (
    document.getElementById("STUFFED TOYS").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("STUFFED TOYS").style.display = "none";
  }
  if (document.getElementById("CANDY BUCKET").innerHTML.includes(searchValue)) {
    document.getElementById("CANDY BUCKET").style.display = "block";
  }
  if (
    document.getElementById("CANDY BUCKET").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("CANDY BUCKET").style.display = "none";
  }
  if (document.getElementById("MESSAGE CARD").innerHTML.includes(searchValue)) {
    document.getElementById("MESSAGE CARD").style.display = "block";
  }
  if (
    document.getElementById("MESSAGE CARD").innerHTML.includes(searchValue) ===
    false
  ) {
    document.getElementById("MESSAGE CARD").style.display = "none";
  }
});

var productsSearch = [
  {
    name: "WITCH'S HAT",
    id: 0,
  },
  {
    name: "WITCH'S CAPE",
    id: 1,
  },
  {
    name: "WITCH'S BROOM",
    id: 2,
  },
  {
    name: "JACK-O'-LANTERN",
    id: 3,
  },
  {
    name: "GHOST LIGHT BULB",
    id: 4,
  },
  {
    name: "WALL CLOCK",
    id: 5,
  },
  {
    name: "STUFFED TOYS",
    id: 6,
  },
  {
    name: "CANDY BUCKET",
    id: 7,
  },
  {
    name: "MESSAGE CARD",
    id: 8,
  },
];

var searchListRender = productsSearch
  .map((user) => {
    return `
  <a href="../html/detailproduct.html?id=${user.id}"><h2 id="${user.name}">${user.name}</h2></a>
  `;
  })
  .join("\n");

let searchList = document.getElementById("search-list");
searchList.innerHTML = `
${searchListRender}
`;
