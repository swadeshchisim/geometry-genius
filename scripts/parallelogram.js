function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    //calculate area
    const area = base * height;
    setInnerTextById('parallelogram-area', area);

    const calculationArea = document.getElementById('area-calculation');
    calculationArea.innerText = 'Parallelogram Area: ' + area;
}