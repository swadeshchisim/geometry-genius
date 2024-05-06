function calculateTriangleArea() {
    /* get triangle base */
    const base = getInputValueById('triangle-base');

    // get triangle height value
    const height = getInputValueById('triangle-height');

    //calculate triangle area
    const area = 0.5 * base * height;
    setInnerTextById('triangle-area', area);

     // display in area calculator
     const areaCalculator = document.getElementById('area-calculation');
     areaCalculator.innerText = 'Triangle Area: ' + area;
}