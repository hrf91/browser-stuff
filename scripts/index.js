document.querySelector("#example-span").textContent = "Goodbye"

const divs = document.querySelectorAll("div");

for (let d of divs) {
    d.innerText = "Changed!";
}