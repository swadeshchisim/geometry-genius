function calculateParallelogramArea() {
    //get input of parallelogram base
    const base = getInputValueById('parallelogram-base');
     //get input of parallelogram height
    const height = getInputValueById('parallelogram-height');
    //calculate perallelogram area
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
    //display parallelogram innerText
    const calculationArea = document.getElementById('area-calculation');
    calculationArea.innerText = 'Parallelogram Area: ' + area;
}