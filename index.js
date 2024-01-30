const array = [
  {
    image: "./Images/image-retro-pcs.jpg",
    num: "01",
    header: "Reviving Retro PCs",
    para: "What happens when old PCs are given modern upgrades?"
  },

  {
    image: "./Images/image-top-laptops.jpg",
    num: "02",
    header: "Top 10 Laptops of 2022",
    para: "Our best picks for various needs and budgets."
  },

  {
    image: "./Images/image-gaming-growth.jpg",
    num: "03",
    header: "The Growth of Gaming",
    para: "How the pandemic has sparked fresh opportunities."
  }
];

const container = document.querySelector(".container");
const techFlex = document.createElement("div");
  techFlex.className = "tech-flex"

array.forEach(item => {
    const tech = document.createElement("div");

    tech.innerHTML = `<div class="items">
    <img src="${item.image}"></img>
    <div>
    <h3>${item.num}</h3>
      <h4>${item.header}</h4>
      <p>${item.para}</p>
    </div>
    </div>`

    container.appendChild(techFlex);
    techFlex.appendChild(tech)
    console.log(tech);
});

const imgMobile = document.querySelector(".img-mobile")
const unorderedL = document.querySelector(".unl-mobile")
const menu = document.querySelector(".menu")
const menuClose = document.querySelector(".menu-close")


menu.addEventListener("click", ()=>{
  unorderedL.style.display = "block"
  container.style.backgroundColor = "#696b80"
  imgMobile.style.opacity = "0.6"
})

menuClose.addEventListener("click", () =>{
  unorderedL.style.display = "none"
  container.style.backgroundColor = "white" 
  imgMobile.style.opacity = "1"
})