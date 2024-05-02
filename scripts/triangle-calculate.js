function calculateTriangleArea() {
    /* get triangle base */
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);


    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    //calculate triangle area
    const area = 0.5 * base * height;

    //display triangle area
    let areaText = document.getElementById('triangle-area');
    areaText.innerText = area;

    triangleBaseInput.value = '';
    triangleHeightInput.value = '';

     // display in area calculator
     const areaCalculator = document.getElementById('area-calculation');
     areaCalculator.innerText = 'Triangle Area: ' + area;
}