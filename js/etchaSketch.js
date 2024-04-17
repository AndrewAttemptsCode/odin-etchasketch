const container = document.querySelector(".squaresContainer");
let isMouseDown = false;

// Resize grid button
const buttonResize = document.createElement("button");
buttonResize.classList.add("buttonResize");
buttonResize.textContent = "Resize Grid";
document.body.appendChild(buttonResize);

// Creates 16 by 16 div grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

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
