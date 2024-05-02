function calculateRhombusArea() {
    //rhombus diagonal 1
    const diagonalFirstInput = document.getElementById('diagonal-1');
    const diagonalFirstText = diagonalFirstInput.value;
    const diagonalFirst = parseFloat(diagonalFirstText);

    //rhombus diagonal 2
    const diagonalSecondInput = document.getElementById('diagonal-2');
    const diagonalSecondText = diagonalSecondInput.value;
    const diagonalSecond = parseFloat(diagonalSecondText);

    //calculate rhombus area
    const area = 0.5 * diagonalFirst * diagonalSecond;


    //display rhombus area text
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;

    diagonalFirstInput.value = '';
    diagonalSecondInput.value = '';

    // display in area calculator
    const areaCalculator = document.getElementById('area-calculation');
    areaCalculator.innerText = 'Rhombus Area: ' + area;
}