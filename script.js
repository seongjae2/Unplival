var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colour = [  'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'];

var angleIndegrees = 0;
var options = {
    rotation: (-0.5 * Math.PI) + (angleIndegrees/180 * Math.PI),
};

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'rgba(0, 0, 0, 0.5)'
context.fillRect(100,100,100,100) //x,y,width,height

var myChart = new Chart(context, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1,1,1,1,1,1,1,1],
            backgroundColor: colour
        }]
    },
    options: options
});


function animate() {
    requestAnimationFrame(animate);

}


// //Function to get the mouse position
// function getMousePos(canvas, event) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
// }
// //Function to check whether a point is inside a rectangle
// function isInside(pos, rect){
//     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// }

// //The rectangle should have x,y,width,height properties
// var rect = {
//     x:250,
//     y:350,
//     width:200,
//     height:100
// };

// //Binding the click event on the canvas
// canvas.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(context, evt);

//     if (isInside(mousePos,rect)) {
//         alert('clicked inside rect');
//     }else{
//         alert('clicked outside rect');
//     }   
// }, false);