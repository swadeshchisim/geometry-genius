function calculateRhombusArea() {
    // get first diagonal input value
    const firstDiagonal = getInputValueById('first-diagonal');
    
    //get second diagonal input value
    const secondDiagonal = getInputValueById('second-diagonal');

    // calculate area
    const area = 0.5 * firstDiagonal * secondDiagonal;
    setInnerTextById('rhombus-area', area);

    // display in area calculator
    const areaCalculator = document.getElementById('area-calculation');
    areaCalculator.innerText = 'Rhombus Area: ' + area;
}