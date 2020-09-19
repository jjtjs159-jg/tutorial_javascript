let num = 1;

function add() {
    console.log(num + 1);
    num = num + 1;
}

const loop = setInterval(add, 1000);

window.onload = button;

function button() {
    document.getElementById('button').onclick = function() {
        clearInterval(loop);
    };
}