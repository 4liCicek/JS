let menuTimeout = null;


document.querySelector("#menu").addEventListener("mouseenter", (e) => {
    menuTimeout = setTimeout(() => {
        e.target.classList.add("opened");
    }, 500);


})

document.querySelector("#menu").addEventListener("mouseleave", (e) => {
    e.target.classList.remove("opened");
    clearTimeout(menuTimeout);

})




