function calculateRhombusArea() {
    const firstDiagonal = getInputValueById('first-diagonal');
    const secondDiagonal = getInputValueById('second-diagonal');
    const area = 0.5 * firstDiagonal * secondDiagonal;
    setInnerTextById('rhombus-area', area);

    // display in area calculator
    const areaCalculator = document.getElementById('area-calculation');
    areaCalculator.innerText = 'Rhombus Area: ' + area;
}