const container = document.querySelector(".squaresContainer");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
document.body.appendChild(buttonContainer);

const titleText = document.createElement("div");
titleText.classList.add("titleText");
titleText.textContent = "Sketch Pad";
document.body.prepend(titleText);

let isMouseDown = false;

// Resize grid button
const buttonResize = document.createElement("button");
buttonResize.classList.add("buttonResize");
buttonResize.textContent = "Resize Grid";
buttonContainer.appendChild(buttonResize);

buttonResize.addEventListener("click", () => {
    let gridSize = +prompt("Enter a new grid size (1-100): ");

    if (gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 1 and 100");
    }
});

function createGrid(gridSize) {
    // Clears contents of the container
    container.innerHTML = "";

    // Calculate square size based on container size 
    const squareSize = (100 / gridSize) + "%";

    // Creates div grid based on user input
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize;
            square.style.height = squareSize;
            container.appendChild(square);
        }
    }
}

// Default to 16 x 16 grid on page load
createGrid(16);

// Event listeners for when mouse button is clicked and dragged
container.addEventListener("mousedown", () => {
    isMouseDown = true;
});

container.addEventListener("mouseup", () => {
    isMouseDown = false;
});

container.addEventListener("mousemove", (event) => {
    if (isMouseDown && rainbowModeActive) {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = generateRandomColor();
        }
        } else if (isMouseDown) {
            if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = "black";
        }
    }
});

container.addEventListener("click", (event) => {
    if (!isMouseDown && rainbowModeActive) {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = generateRandomColor();
        }
    } else if (!isMouseDown) {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = "black";
        }
    }
});

// Rainbow option section //

// Generate random color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    return rgbColor;
}

// Rainbow button
const buttonRainbow = document.createElement("button");
buttonRainbow.classList.add("buttonRainbow");
buttonRainbow.textContent = "Rainbow Mode";
buttonContainer.appendChild(buttonRainbow);

// Rainbow event listener

buttonRainbow.addEventListener("click", toggleRainbow);

buttonRainbow.addEventListener("click", () => {
    buttonRainbow.classList.toggle("buttonSelect");
});

// Toggle rainbow function

let rainbowModeActive = false;

function toggleRainbow() {
    rainbowModeActive = !rainbowModeActive;
}