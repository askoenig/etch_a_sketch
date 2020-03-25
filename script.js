const grid = document.querySelector(".gridContainer");
let input = document.getElementById("quantity");

// const newSize = input.value;

createGrid = () => {
  input.addEventListener("change", updateGrid);
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${input.value}, 2fr)`
  );
  grid.style.setProperty("grid-template-rows", `repeat(${input.value}, 2fr)`);
  for (let i = 0; i < input.value * input.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(input.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

createGrid();
