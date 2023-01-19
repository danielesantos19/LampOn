let turnOn = document.getElementById('turnOn')
let turnOf = document.getElementById('turnOf')
let lamp = document.getElementById('lamp')

function ligar(){
    if (!quebrar ()){
    lamp.src = './img/ligada.jpg';}
}
function desligadar(){
    if (!quebrar ()){
    lamp.src = './img/desligada.jpg';}
}
function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}
function quebrar(){
    return lamp.src.indexOf ( 'quebrada' ) > -1;
}
turnOn.addEventListener('click', ligar);
turnOf.addEventListener('click', desligadar);
lamp.addEventListener('mouseover', ligar);
lamp.addEventListener('mouseleave', desligadar);
lamp.addEventListener('dblclick', lampBroken);
