const colors = ["DarkRed", "DarkSalmon", "DarkSeaGreen", 
"DarkSlateBlue", "DarkCyan", "DarkKhaki", "DarkOliveGreen", "#202b38"
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}

function changeColor() {
    let randomNumber = getRandom();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

btn.addEventListener('click', changeColor);