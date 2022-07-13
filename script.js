const container = document.querySelector(".container");

function createSquares(size) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    for (let i = 0; i < size; i++) {
        const box = document.createElement("div");
        box.className = "box";
        for (let j = 0; j < size; j++) {
            const block = document.createElement("div");
            block.className = "square";
            box.appendChild(block);
        }
        container.appendChild(box);
    }
}

let size = parseInt(document.querySelector("#rangevalue").textContent);
let selection = 1;
createSquares(size);

let squares = document.querySelectorAll(".square");

squares.forEach(element => {
    element.addEventListener("mouseover", () => {
        if (selection === 0) {
            element.style.backgroundColor = "white";
        }
        else if (selection === 1) {
            element.style.backgroundColor = "black";
        }
        else if (selection === 2) {
            let colorOne = Math.floor(Math.random() * 256);
            let colorTwo = Math.floor(Math.random() * 256);
            let colorThree = Math.floor(Math.random() * 256);
            element.style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
        }
    });
});

const erase = document.querySelector("#erase");
const random = document.querySelector("#random");
const black = document.querySelector("#black");

erase.addEventListener("click", () => {
    selection = 0;
    erase.style.backgroundColor = "lightgrey";
    random.style.backgroundColor = "white";
    black.style.backgroundColor = "white";
});
random.addEventListener("click", () => {
    selection = 2;
    erase.style.backgroundColor = "white";
    random.style.backgroundColor = "lightgrey";
    black.style.backgroundColor = "white";
});
black.addEventListener("click", () => {
    selection = 1;
    erase.style.backgroundColor = "white";
    random.style.backgroundColor = "white";
    black.style.backgroundColor = "lightgrey";
});

const slider = document.querySelector(".slider input");
slider.addEventListener("mouseup", () => {
    size = parseInt(document.querySelector("#rangevalue").textContent);
    createSquares(size);
    squares = document.querySelectorAll(".square");
    squares.forEach(element => {
        element.addEventListener("mouseover", () => {
            if (selection === 0) {
                element.style.backgroundColor = "white";
            }
            else if (selection === 1) {
                element.style.backgroundColor = "black";
            }
            else if (selection === 2) {
                let colorOne = Math.floor(Math.random() * 256);
                let colorTwo = Math.floor(Math.random() * 256);
                let colorThree = Math.floor(Math.random() * 256);
                element.style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
            }
        });
    });
});