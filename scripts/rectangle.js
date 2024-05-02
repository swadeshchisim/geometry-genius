function calculateRectangleArea() {
    //get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    // get legnth of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    

    // calculate rectangle area
    const area = width * length;
    

    //display rectangle area
    const reactangleAreaSpan = document.getElementById('rectangle-area');
    reactangleAreaSpan.innerText = area;

    widthInput.value = '';
    lengthInput.value = '';
}