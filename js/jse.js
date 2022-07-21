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
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("ra").innerHTML=r;

switch(b){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rb").innerHTML=r;

switch(c){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rc").innerHTML=r;

switch(d){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rd").innerHTML=r;

switch(e){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("re").innerHTML=r;

switch(f){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rf").innerHTML=r;

switch(g){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rg").innerHTML=r;

switch(h){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rh").innerHTML=r;

switch(i){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("ri").innerHTML=r;

switch(j){
    case "v": r='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": r='<span style="color: orange;">No respondido</span>'; break;
    default: r='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rj").innerHTML=r;

document.getElementById("nota").innerHTML=(acertadas/2).toFixed(1);
}