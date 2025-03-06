// const navbarbtn = () => {
//     document.getElementById("name").classList.toggle("show-navbar")
//     document.getElementById("rotates").classList.toggle("rotate-42")
//     document.getElementById("transparent").classList.toggle("bg-transparent")
//     document.getElementById("rotates-2").classList.toggle("rotate-43")
//     document.body.classList.toggle("overflow-hidden")
// }

let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
    let activeNav = menuList.hasAttribute("class", "show");
    if (activeNav) { menuIcon.classList.toggle("active") };
})