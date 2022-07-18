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
    var acertadas = 0;

switch(a){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("ra").innerHTML=r;

switch(b){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rb").innerHTML=r;

switch(c){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rc").innerHTML=r;

switch(d){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rd").innerHTML=r;

switch(e){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("re").innerHTML=r;

switch(f){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rf").innerHTML=r;

switch(g){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rg").innerHTML=r;

switch(h){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rh").innerHTML=r;

switch(i){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("ri").innerHTML=r;

switch(j){
    case "v": r='Correcto'; acertadas++; break;
    default: r='Incorrecto'; break;
}
document.getElementById("rj").innerHTML=r;

document.getElementById("nota").innerHTML=(acertadas/2);
}