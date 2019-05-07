function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = strokeColor;
    myPath.strokeWidth = strokeWidth;
    myPath.strokeCap = 'round';
    myPath.add(event.point);
    //myPath.fullySelected = true;
}

function onMouseDrag(event) {
    myPath.add(event.point)
}

function onMouseUp(event) {
    myPath.simplify(10)
    myPath.fillColor = fillColor
}

globals.setFillColor = function (color) {
    if (myPath) myPath.fillColor = fillColor
}
globals.setStrokeColor = function (color) {
    if (myPath) myPath.strokeColor = strokeColor
}