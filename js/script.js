function insert(num) {
    var numero = document.getElementById('resultado_display').innerHTML;
    document.getElementById('resultado_display').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado_display').innerHTML = "";
}

function backspace() {
    var display_moment = document.getElementById('resultado_display').innerHTML;
    document.getElementById('resultado_display').innerHTML = display_moment.substring(0, display_moment.length -1)
}

function resultado_calculado() {
    var display_moment = document.getElementById('resultado_display').innerHTML;
    if (display_moment) {
        document.getElementById('resultado_display').innerHTML = eval(display_moment);    
    }
    else {
        document.getelEmentById('resultado_display').innerHTML = display_moment;
    }
}

function trocasinal() {
    var sinal_trocado = document.getElementById('resultado_display').innerHTML * (-1);
    document.getElementById('resultado_display').innerHTML = sinal_trocado;
}