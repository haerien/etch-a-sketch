const container = document.querySelector(".container");
function generateGrids(){
    for(let count = 0; count<16*16; count++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width ="30px";
        grid.style.height ="30px";
        
        container.appendChild(grid);
    }
}
generateGrids();




container.childNodes.forEach(grid => grid.addEventListener("mouseover", ()=>{
    grid.classList.add("hover");
}))

container.childNodes.forEach(grid => grid.addEventListener("mouseleave", ()=>{
    grid.classList.remove("hover");
}))

const button = document.querySelector("button");
