function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}