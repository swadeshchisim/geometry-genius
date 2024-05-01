function calculateTriangleArea() {
    /* get triangle base */
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);


    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    //calculate triangle area
    const area = 0.5 * base * height;
    // console.log(area);

    let areaText = document.getElementById('triangle-area');
    areaText.innerText = area;

    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
}