function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');

    const height = getInputValueById('parallelogram-height');

    //calculate area
    const area = base * height;

    setInnerTextById('parallelogram-area', area);
}

//get input by id

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}