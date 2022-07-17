function calcular(){
    var a= document.getElementById('a').value;
    var b= document.getElementById('b').value;
    var c= document.getElementById('c').value;
    var d= document.getElementById('d').value;
    var e= document.getElementById('e').value;
    var f= document.getElementById('f').value;
    var g= document.getElementById('g').value;
    var h= document.getElementById('h').value;
    var i= document.getElementById('i').value;
    var j= document.getElementById('j').value;

switch(a){
    case "v": r='Correcto'; break;
    default: r='Incorrecto'; break;
}
document.getElementById("resultado").innerHTML=r;
}