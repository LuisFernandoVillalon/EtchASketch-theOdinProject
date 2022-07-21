// Selects a given id or class in our css and html files, and assigns it to a const variable
const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
const reset = document.querySelector('#reset');
// window.onload loads the functions as soon as the page is opened 
window.onload = function createGrid() {
// Assignment called for us to start the program at at grib of 16 x 16, 256 is the amount of cells needed for the grid.
for (let i = 0; i < 256; i++) {
    // Creates a div and assings it to a const variable.
    const div = document.createElement('div');
    // With '.add', you can add onto the newly created 'div' but with '.classList', it allows to manipulate the class 'cell'
    div.classList.add('cell');
    // '.addEventListener' adds event to happen: whenever 'mouseover' happens a function will run.
    div.addEventListener('mouseover', function(event){
        //'event.target.' returns the element that triggered the event, 'style.backgroundColor' colors the background.
        event.target.style.backgroundColor = 'black';
    })
    //Adds the created 'div' unto 'grid'.  
    grid.appendChild(div); 

}
};
//This is the function that is ran when a value is inputed in the slider. 
slider.addEventListener('input', function(){
    //'.value' returns the value of the value attribute of an input field. Which in our case is document.getElemnetById('slider').
    let val = document.getElementById('slider').value;
    //The value obtained from the slider is inserted as a text to be displayed by '.value' class. 
    screenVal.textContent = val;
    //function runs
    removeAllChildNodes(grid);
    //.setAttribute' takes in a name of an attribute and a value which assings onto the class grid.
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    //Runs a loop for the same amounts needed of cells to fill the grid in. 
    for (let i = 0; i < val*val; i++) {
        //Creates a 'div' element and assings to div. 
        const div = document.createElement('div');
        //Adds the cell, of type class, to the newly created 'div'.
        div.classList.add('cell');
        //'.addEventListener' adds an event to happen on the current 'div', which is 'mouseover' and causes a function. 
        div.addEventListener('mouseover', function(event){
            //'event.target' returns the element that triggered the event (the current 'div'), '.style.backgroundColor' styles the bakcground.
            event.target.style.backgroundColor = 'black';
        })
        //Adds the newly created 'div' to the grid.
        grid.appendChild(div); 
    }
});
//function erases all new 'div's that were add onto 'grid'. 
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
//Erases the tracing that has been done. 
reset.addEventListener('click', function(){
    //Gets the value from the slider and assings it to val.
    let val = document.getElementById('slider').value;
    //'.children' returns a collection of all the child elements.
    let cell = grid.children;
    //runs a loop for the amount of cell sin the grid. 0
    for (let i = 0; i < val*val; i++) {
        //Paints all the cells made in the grid white. 
        cell[i].style.backgroundColor = 'white';
    }
});