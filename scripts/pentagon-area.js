function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);

    const pentagonArea = document.getElementById('area-calculation');
    pentagonArea.innerText = 'Pentagon Area: ' + area;
}