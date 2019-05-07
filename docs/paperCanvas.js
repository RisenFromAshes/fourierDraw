function onMouseDown(event) {
    if (myPath) myPath.fullySelected = false
    myPath = new Path();
    myPath.strokeColor = strokeColor;
    myPath.strokeWidth = strokeWidth;
    myPath.fillColor = fillColor
    myPath.strokeCap = 'round';
    myPath.add(event.point);
    myPath.selected = false;
}

function onMouseDrag(event) {
    myPath.add(event.point)
}

function onMouseUp(event) {
    myPath.simplify(10)
    myPath.selected = true;
}

globals.setFillColor = function (color) {
    if (myPath) myPath.fillColor = fillColor
}
globals.setStrokeColor = function (color) {
    if (myPath) myPath.strokeColor = strokeColor
}