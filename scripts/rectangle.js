function calculateRectangleArea() {
    //get width of the rectangle
   const width = getInputValueById('rectangle-width');

    // get legnth of the rectangle
    const length = getInputValueById('rectangle-length');

    // calculate rectangle area
    const area = width * length;

    //display rectangle area
    setInnerTextById('rectangle-area', area);
    
     // display in area calculator
     const areaCalculator = document.getElementById('area-calculation');
     areaCalculator.innerText = 'Rectangle Area: ' + area;
}