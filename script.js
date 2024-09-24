const gridButton = document.querySelector("#grid-button");
const monochromeButton = document.querySelector("#monochrome-button");
const resetButton = document.querySelector("#reset-button");
const gridContainer = document.querySelector("#grid-container");

// Checking input
gridButton.addEventListener("click", () => {
    const gridSize = Number(prompt("How many squares per row or column do you want (Max 100)?"));

    if (!Number.isInteger(gridSize)) {
        alert("Invalid input!");
    } else if (gridSize <= 0) {
        alert("The minimum allowed number of squares per row or column is 1");
    } else if (gridSize > 100) {
        alert("The maximum allowed number of squares per row or column is 100!");
    } else {
        currentGridSize = gridSize;
        createGrid(currentGridSize);
    }
});

// Monochrome mode is off by default
let monochrome = false;

monochromeButton.addEventListener("click", () => {
    monochrome = !monochrome; // Toggle monochrome mode
    monochromeButton.textContent = monochrome ? "Color Mode" : "Monochrome Mode"; // Change to appropriate button text
});

let currentGridSize = 0;

// Reset grid
resetButton.addEventListener("click", () => {
    gridContainer.textContent = "";

    createGrid(currentGridSize);
});

// Creating grid
function createGrid(grid) {
    gridContainer.textContent = "";

    for (let i = 0; i < grid; i++) {
        const row = document.createElement("div");
        gridContainer.appendChild(row);
    
        for (let j = 0; j < grid; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            col.style.width = `${600 / grid}px`;
            col.style.height = `${600 / grid}px`;
            row.appendChild(col);
    
            // Change background color of individual squares by hovering over them
            col.addEventListener("mouseover", () => {
                const newColor = changeColor();
        
                col.style.backgroundColor = newColor;
            });
        }
    }
}

// Paint squares with random colors or with black color (monochrome mode)
function changeColor() {
    if (monochrome) {
        return "#000000";
    } else {
        let color = "#";
        const hexCharacters = "0123456789ABCDEF";
    
        for (let i = 0; i < 6; i++) {
            const randomPosition = Math.floor(Math.random() * hexCharacters.length);
            color += hexCharacters[randomPosition];
        }

        return color;
    }
}