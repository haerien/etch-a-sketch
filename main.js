const body = document.querySelector("body");
function generateGrids(num){
    //generate container div
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

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
}

function removeElement(container){    
    container.remove();
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
        e.target.style.backgroundColor="black"
    }
        
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let value = prompt("How many boxes do you want per row?");
    removeElement(document.querySelector(".container"));
    generateGrids(value);
})
//initial container generation without grids
generateGrids(0);
