let elements = [
  {
    id: 1,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 4,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 5,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 6,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 7,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 8,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    id: 9,
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
];

let box = document.getElementById("cardBox");
let bar = document.getElementsByClassName("fa-bars")[0];
let closeIcon = document.getElementById("close");
let reponsiveMenu = document.getElementById("reponsiveMenu");

bar.addEventListener("click", (e) => {
  reponsiveMenu.style.left = "0";
  // bar.style.display = "none"
});

closeIcon.addEventListener("click", (e) => {
  reponsiveMenu.style.left = "-240px";
});

function cardBoxElements() {
  let boxElements = "";
  elements.forEach((item) => {
    boxElements += `
      <div class="sec__cards-main">
        <div class="sec__card">
          <div class="card-top">
            <img src="${item.img}" />
          </div>
          <div class="card-bottom">
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <button id="readButton" data-page-id=${item.id}>Read More</button>
          </div>
        </div>
      </div>`;
  });

  box.innerHTML = boxElements;

  
  let readButton = document.querySelectorAll("#readButton");
  console.log(readButton);
  readButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.getAttribute("data-page-id"));
      window.location.href = `/review.html?id=${btn.getAttribute(
        "data-page-id"
      )}`;
    });
  });

}

cardBoxElements();
