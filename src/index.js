let elements = [
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
    name: "Lorem Ipsum Dolor",
    desc: "Interdum et malesuada fames ipsum primis faucibus. Aliquam luctus auctor posuere aliquet scelerisque sollicitudin posuere",
    img: "./assets/hotel.png",
  },
  {
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

closeIcon.addEventListener('click', (e) => {
  reponsiveMenu.style.left = "-240px";

})

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
          <button>Read More</button>
          </div>
        </div>
      </div>`;
  });

  box.innerHTML = boxElements;
}

cardBoxElements();
