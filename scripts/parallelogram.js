function calculateParallelogramArea() {
    // parallelogram base
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    
    //parallelogram height
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    // calculate parallelogram area
    const area = base * height;

    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

     // display in area calculator
     const areaCalculator = document.getElementById('area-calculation');
     areaCalculator.innerText = 'Parallelogram Area: ' + area;

     baseInput.value = '';
     heightInput.value = '';
}