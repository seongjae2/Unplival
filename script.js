var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var myChart = new Chart(context, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }]

    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.index;
                }
            }
        }
    }
});

var times = 0;
var chocolate = 0;
var index = 100000;
var pointer = 0;
var colour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var chocolour = ['rgba(0, 0, 0, 0.1)',
    'rgba(255, 215, 100, 0.7)',
    'rgba(200, 125, 65, 0.8)',
    'rgba(130, 60, 10, 0.85)',
    'rgba(75, 50, 15, 1)'];


function refresh() {
    var tmpDat = [];
    colour.forEach(function (element) {
        tmpDat.push(chocolour[element]);
    });

    myChart.data.datasets[0].backgroundColor = tmpDat;
    myChart.update();
}
var rotation = 0;
function rotate(clockwise) {
    if (clockwise) {
        index--;
        rotation += 36;
    }
    else {
        index++;
        rotation -= 36;
    }
    $('#myCanvas').css('transform', 'rotate(' + rotation + 'deg)');
}
function guchigi() {
    var tmpDat = [];
    colour.forEach(function (elem) {
        if (elem > 0 && elem < 4) {
            tmpDat.push(elem + 1)
        } else if (elem != 4) {
            tmpDat.push(0);
        } else {
            tmpDat.push(4);
        }
    });
    colour = tmpDat;
    refresh()
}
function putaway() {
    if (colour[index % 10] == 4) {
        colour[index % 10] = 0;
        chocolate += 1;
        refresh()
    }
    else if (colour[index % 10] != 0) {
        colour[index % 10] = 0;
        refresh()
    }
    else {
        colour[index % 10] = 0;
        refresh()
    }
}

function doit(event) {
    var key = event.keyCode;
    times++;
    switch (key) {
        case 81: //Q -> 초콜릿 짜기
            guchigi()
            colour[index % 10] = 1;
            refresh()
            break;

        case 87: // W -> 만약 초콜릿 없다면 초콜릿 짜기
            if (colour[index % 10] == 0) {
                guchigi()
                colour[index % 10] = 1;
                refresh()
                break;
            }
            else {
                refresh()
                break;
            }

        case 69: // E -> 스위치
            if (colour[index % 10] == 0) {
                guchigi()
                colour[index % 10] = 1;
                refresh()
                break;
            }
            else {
                putaway()
                guchigi()
                break;
            }

        case 82: // R -> 만있 시계 1 회전
            if (colour[index % 10] != 0) {
                guchigi();
                rotate(true);
                break;
            }
            else {
                break;
            }
        case 84: // T -> 만있 반시계 1 회전
            if (colour[index % 10] != 0) {
                guchigi();
                rotate(false);
                break;
            }
            else {
                break;
            }

        case 65: // A -> 시계 1 회전
            guchigi();
            rotate(true);
            break;
        case 83: // S -> 반시계 1 회전
            guchigi();
            rotate(false);
            break;
        case 68: // D -> 시계 2 회전
            guchigi();
            rotate(true);
            rotate(true);
            break;
        case 70: // F -> 반시계 2 회전
            guchigi();
            rotate(false);
            rotate(false);
            break;

        case 90: // Z -> 꺼내기
            putaway();
            guchigi();
            break;
        case 88: // X -> 만있 꺼내기
            if (colour[index % 10] != 0) {
                putaway();
                guchigi();
                break;
            }
            else {
                break;
            }
        case 67: // C -> 만있 바로 굳히고 꺼내기
            if (colour[index % 10] != 0) {
                guchigi();
                colour[index % 10] = 4;
                refresh()
                setTimeout(function(){ 
                    putaway();
                    document.getElementById("chocolateNumber").innerHTML = " x " + chocolate;
                }, 500); //delay [ms]
                break;
            }
            else {
                break;
            }

        case 86: // V -> 만없 제거하기
            if (colour[index % 10] == 0) {
                putaway();
                guchigi();
                break;
            }
            else {
                break;
            }

        default:
            times--;
    }
    document.getElementById("chocolateNumber").innerHTML = " x " + chocolate;
    document.getElementById("cardNumber").innerHTML = " 카드 사용 횟수 : " + times;
    console.log('Items : ' + times);
    console.log(colour)
    console.log(chocolate)

}