function calculateEllipseArea() {
    //get input ellipse major radius
    const majorRadius = getInputValueById('ellipse-major-radius');

    //get input ellipse minor radius
    const minorRadius = getInputValueById('ellipse-minor-radius');

    // calculate ellipse area
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);

    // display ellipse area text
    const ellipseArea = document.getElementById('area-calculation');
    ellipseArea.innerText = 'Ellipse Area: ' + area;
}