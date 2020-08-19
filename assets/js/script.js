const wrapper = document.querySelector(".testimonials-wrapper");
const profile = document.querySelector(".upper-img");
const publisher = document.querySelector(".name");
const burgerIcon = document.querySelector(".burgerIcon");
const navLinks = document.querySelector(".nav-wrapper");
const DOMImg = [...document.querySelectorAll(".imgs")];

const article = [
  `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, neque
            inventore harum ut porro fugiat non. Dolorum quas, quo, adipisci cum
            esse autem ducimus sit officiis eligendi hic nisi voluptate."`,
];

wrapper.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    let targetImg = "";
    DOMImg.forEach((image) => {
      image.classList.remove("active");
      e.target.classList.add("active");
      targetImg = e.target.src;
    });
    profile.src = targetImg;
    if (e.target.dataset.id === "ray") {
      publisher.innerHTML = "Ray inventore";
    } else if (e.target.dataset.id === "linda") {
      publisher.innerHTML = "linda inventore";
    } else if (e.target.dataset.id === "ben") {
      publisher.innerHTML = "ben inventore";
    } else if (e.target.dataset.id === "john") {
      publisher.innerHTML = "john inventore";
    } else if (e.target.dataset.id === "jen") {
      publisher.innerHTML = "jen inventore";
    }
  }
  const rand = Math.floor(Math.random() * article.length);
  document.querySelector(".t-content .para").innerHTML = article[rand];
});

burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav");
  burgerIcon.classList.toggle("show-lcon");
});
