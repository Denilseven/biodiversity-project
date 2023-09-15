// https://youtu.be/hJ7Rg1821Q0?si=1Kv3hgfN48cOgZPM

const blurDivs = document.querySelectorAll(".blur-load")

blurDivs.forEach(div => {
    const img = div.querySelector("img");

    function loaded() {
        div.classList.add("loaded");
    }

    if (img.complete) {
        loaded();
    } else {
        img.addEventListener("load", loaded);
    }
})