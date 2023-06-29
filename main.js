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

            grid.addEventListener("mouseover", ()=>{grid.classList.add("hover");})
            grid.addEventListener("mouseleave", ()=>{grid.classList.remove("hover");})
            
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


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let value = prompt("How many boxes do you want per row?");
    removeElement(document.querySelector(".container"));
    generateGrids(value);
})
//initial container generation without grids
generateGrids(0);
