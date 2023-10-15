function sumar(n1, n2){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    var suma = n1 + n2;

    document.setElementById("resultado").value = suma;
}

document.getElementById("btn_Sumar").addEventListener("click", sumar);

function producto(num1, num2){
    return num1*num2;
}