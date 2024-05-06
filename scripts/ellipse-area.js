function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);

    const ellipseArea = document.getElementById('area-calculation');
    ellipseArea.innerText = 'Ellipse Area: ' + area;
}