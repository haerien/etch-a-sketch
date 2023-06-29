const body = document.querySelector("body");
const table = document.querySelector(".table");
function generateGrids(num){
    //generate container div
    const container = document.createElement("div");
    container.classList.add("container");
    table.appendChild(container);

    //generate grids in container
    if(num<100){
        for(let count = 0; count<num*num; count++){
            const grid = document.createElement("div");
            grid.classList.add("grid");

            grid.style.width = 480/num+"px";
            grid.style.height = 480/num+"px";

            grid.addEventListener("mouseover", (e)=>{changeColor(e);})
            grid.addEventListener("mouseleave", (e)=>{changeColor(e)})
            
            container.appendChild(grid)
        }
    }

    else{
        alert("Your value needs to be smaller than 100!");
    }

    const bottomText = document.createElement("div");
    bottomText.classList.add("bottom-text");
    bottomText.innerText=`${num}x${num}`;
    table.appendChild(bottomText);
}

function removeElement(element){    
    element.remove();
} 

const blackButton = document.querySelector(".color-button#black");
const rainbowButton = document.querySelector(".color-button#rainbow");
const buttons = document.querySelector(".buttons");

buttons.childNodes.forEach(button => button.addEventListener("click",(e) => pickColor(e)));

let penColor = "black";
const colorName = document.querySelector("#color-name");
colorName.innerText = `Color: ${penColor}`;
function pickColor(e){
    switch(e.target.id){
        case "black": penColor="black"; break;
        case "rainbow": penColor="rainbow"; break;
    }
    colorName.innerText = `Color: ${penColor}`;
    
}

let mousedown = false;
document.body.onmousedown = () => mousedown=true;
document.body.onmouseup = () => mousedown=false;
function changeColor(e){
    if(e.type == "mouseover" && !mousedown) {
        e.target.classList.add("hover");
    }
    else if(e.type == "mouseleave"){
        e.target.classList.remove("hover");
    }
    else {
        if(penColor=="rainbow"){
            const randomR = Math.floor(Math.random()*256);
            const randomG = Math.floor(Math.random()*256);
            const randomB = Math.floor(Math.random()*256);

            e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        }
        else if(penColor=="black"){
            e.target.style.backgroundColor="black";
        }
    }
        
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let value = prompt("How many boxes do you want per row?");
    removeElement(document.querySelector(".container"));
    removeElement(document.querySelector(".bottom-text"));
    generateGrids(value);
})
//initial container generation without grids
generateGrids(0);
