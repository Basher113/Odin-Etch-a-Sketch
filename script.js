const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("button");
let gridDefaultSize = 16; // default Grid size
let containerSize = 800;

const generateGrid = (gridSize=gridDefaultSize) => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            const boxSize = `${Math.floor(containerSize / gridSize)}px`;
            box.style.width = boxSize;
            box.style.height = boxSize;
            box.classList.add("box");
            container.appendChild(box);
        }
    }
    const boxesElement = document.querySelectorAll(".box");
    boxesElement.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            const randomRGBColor = generateRandomRGBColor()
            box.style.backgroundColor = randomRGBColor;
        })
    })
}

generateGrid();

const generateRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

gridSizeButton.addEventListener("click", () => {
    newSize = parseInt(prompt("Enter the grid size: "));
    if (newSize > 0) {
        container.innerHTML = ""; // delete the container content (Grid)
        generateGrid(newSize);
    }

})




