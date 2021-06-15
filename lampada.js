const on = document.getElementById ( 'on' );
const off = document.getElementById ( 'off' );
const lampD = document.getElementById ( 'lamp-d' );

function isLampBroken () {
    return lampD.src.indexOf ( 'quebrada' ) > -1
}

function lampon () {
    if ( !isLampBroken () ) {
        lampD.src = './img/ligada.jpg';
    }
}

function lampoff () {
    if ( !isLampBroken () ) {
        lampD.src = './img/apagada.jpg';
    }
}

function lampcrash () {
    lampD.src = './img/quebrada.jpg';
}

on.addEventListener ( 'click', lampon );
off.addEventListener ( 'click', lampoff );
lampD.addEventListener ( 'mouseover', lampon );
lampD.addEventListener ('mouseout', lampoff );
lampD.addEventListener ( 'dblclick', lampcrash );