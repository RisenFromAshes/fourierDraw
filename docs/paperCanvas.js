var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.strokeWidth = 4;
    myPath.strokeCap = 'round';
    myPath.add(event.point);
    //myPath.fullySelected = true;
}

function onMouseDrag(event) {
    myPath.add(event.point)
}

function onMouseUp(event) {
    myPath.simplify(10)
}