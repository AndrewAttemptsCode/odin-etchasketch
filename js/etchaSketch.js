const container = document.querySelector(".squaresContainer");
let isMouseDown = false;

// Resize grid button
const buttonResize = document.createElement("button");
buttonResize.classList.add("buttonResize");
buttonResize.textContent = "Resize Grid";
document.body.appendChild(buttonResize);

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
    // Creates div grid based on user input
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
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
    if (isMouseDown) {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = "black";
        }
    }
});

container.addEventListener("click", (event) => {
    if (!isMouseDown) {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = "black";
        }
    }
});
