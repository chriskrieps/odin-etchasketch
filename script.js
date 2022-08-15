function createLayout(aWidth, aHeight) {
    for (let i = 0; i < aHeight; i++)
    {
        const vertDiv = createVertical();
        const currentDiv = document.getElementById("squares");
        currentDiv.append(vertDiv);
        console.log("vertical div #"+i);

        for (let j = 0; j<aWidth; j++)
        {
            const horizDiv = createHorizontal();
            vertDiv.append(horizDiv);
            console.log("horizontal div #"+j);
        }
    }
    // Add event handlers to divs
    const myDivs = document.querySelectorAll("div.horizontal");
    myDivs.forEach(element => {
    element.addEventListener('mouseover', event => {
        colorChange(element);
    })
});
}

function createHorizontal(){
    const newDiv = document.createElement("div");
    newDiv.className="horizontal";
    return newDiv;
}

function createVertical() {
    const newDiv = document.createElement("div");
    newDiv.className="vertical";
    return newDiv;
}

function colorChange(item) {
    item.setAttribute("style","background-color: black;");
}

function colorReset(item) {
    item.setAttribute("style","background-color: lime;");
}

createLayout(16,16);



// Add event handler to reset button
const resetBtn = document.querySelector("button.reset");
resetBtn.addEventListener('click', event =>{
    myDivs.forEach(element => {
        colorReset(element);
    })
});

// Add event handler for size button
const sizeBtn = document.querySelector("button.size");
sizeBtn.addEventListener('click', event =>{
    // Function collects h and w info for new grid
    myWidth = prompt("width?: ");
    if (myWidth > 100) { myWidth = 100;}
    myHeight = prompt("height?: ");
    if (myHeight > 100) { myHeight= 100;}
    
    // Clear out the old grid
    const currentDiv = document.getElementById("squares");
    currentDiv.innerHTML="";

    // Create new grid
    createLayout(myWidth, myHeight);
    });