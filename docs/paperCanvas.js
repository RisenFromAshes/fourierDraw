function onMouseDown(event) {
    if (myPath) myPath.fullySelected = false
    myPath = new Path();
    myPath.strokeColor = strokeColor;
    myPath.strokeWidth = strokeWidth;
    myPath.fillColor = fillColor
    myPath.strokeCap = 'round';
    myPath.strokeJoin = 'round';
    myPath.selected = false;
    myPath.add(event.point);
}

function onMouseDrag(event) {
    myPath.add(event.point);
}

function onMouseUp(event) {
    myPath.simplify(10 * strokeWidth / 4);
    //myPath.flatten(0);
    myPath.selected = true;
}

globals.setFillColor = function (color) {
    if (myPath) myPath.fillColor = fillColor;
}
globals.setStrokeColor = function (color) {
    if (myPath) myPath.strokeColor = strokeColor;
}
globals.setStrokeWidth = function (width) {
    if (myPath) myPath.strokeWidth = width;
}