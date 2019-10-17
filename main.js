let lightstring = document.querySelector(".lightstring");
let color = document.querySelectorAll(".c");

let background = document.querySelector("#background-color");

background.addEventListener("change", changeBackground);

let colors = [];

color.forEach(element => colors.push(element));
color.forEach(element => {element.addEventListener("change", changeColor)})

let number = 0; 

color.forEach(c => {
  if (number >= color.length) { //NOT NECESSARY
  number = 0;
  }
  c.setAttribute("data-color", number);
  number ++;
});

function changeBackground() {
  console.log(this)
  document.documentElement.style.setProperty(`--background-color`, this.value);
}

function changeColor() {
  
  console.log(this);
  console.log(this.value)
  document.documentElement.style.setProperty(`--color${this.dataset.color}`, this.value);

}

for (let counter = -100, color = 0; counter < 100; counter += 5, color ++) {

  let bulb = document.createElement("div");
  let sh = document.createElement("div");

  sh.setAttribute("class", "top");

  bulb.appendChild(sh);
  
  bulb.style.left = `${counter}%`
  
  if (color === colors.length) {
    color = 0;
  }

  bulb.setAttribute("data-color", color); // NO
  
  bulb.setAttribute("class", `lightbulb color${color}`);

  //bulb.addEventListener("click", changeColor);

  lightstring.appendChild(bulb)

}

function lightsEven(lightstring) {

  let children = lightstring.children;

  for (let bulb = 0; bulb < children.length; bulb ++) {
    if (bulb % 2 === 0) {
      children[bulb].className += " even";
    } 
  }
};

function lightsOdd(lightstring) {

  let children = lightstring.children;

  for (let bulb = 0; bulb < children.length; bulb ++) {
    if (!(bulb % 2 === 0)) {

      children[bulb].className += " odd";
    } 
  }
};

function lights() {
  let number = 0;
  return function party() {
    if (number > 1) {number = 0}
    number ++;
    return number;
  }
};

let party = lights();

setInterval(function() {
  if (party() === 1) {
    lightsEven(lightstring)
  } else {
    lightsOdd(lightstring)
  }
}, 1500)



