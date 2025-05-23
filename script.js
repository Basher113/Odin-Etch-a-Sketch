const container = document.querySelector(".container");

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const squareDivEl = document.createElement("div");
        squareDivEl.classList.add("box");
        container.appendChild(squareDivEl);
    }
}