var myPath = new Path();
myPath.strokeColor = 'black';
myPath.strokeWidth = 5;
myPath.strokeCap = 'round';
myPath.add(new Point(0, 0));

function onMouseDrag(event) {
    myPath.add(event.point)
}