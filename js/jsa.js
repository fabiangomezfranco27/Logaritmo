function calculara(){
    var aa= document.getElementById('aa').value;
    var ab= document.getElementById('ab').value;
    var ac= document.getElementById('ac').value;
    var ad= document.getElementById('ad').value;
    var ae= document.getElementById('ae').value;
    var af= document.getElementById('af').value;
    var ag= document.getElementById('ag').value;
    var acertadas = 0;

switch(aa){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("raa").innerHTML=ra;

switch(ab){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rab").innerHTML=ra;

switch(ac){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rac").innerHTML=ra;

switch(ad){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rad").innerHTML=ra;

switch(ae){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rae").innerHTML=ra;

switch(af){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("raf").innerHTML=ra;

switch(ag){
    case "v": ra='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": ra='<span style="color: orange;">No respondido</span>'; break;
    default: ra='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rag").innerHTML=ra;

document.getElementById("notaa").innerHTML=(((acertadas/7)*10)/2).toFixed(1);
}

function calcularb(){
    var ba= document.getElementById('ba').value;
    var bb= document.getElementById('bb').value;
    var bc= document.getElementById('bc').value;
    var bd= document.getElementById('bd').value;
    var be= document.getElementById('be').value;
    var bf= document.getElementById('bf').value;
    var bg= document.getElementById('bg').value;
    var acertadas = 0;

switch(ba){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rba").innerHTML=rb;

switch(bb){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbb").innerHTML=rb;

switch(bc){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbc").innerHTML=rb;

switch(bd){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbd").innerHTML=rb;

switch(be){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbe").innerHTML=rb;

switch(bf){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbf").innerHTML=rb;

switch(bg){
    case "v": rb='<span style="color: green;">Correcto</span>'; acertadas++; break;
    case "n": rb='<span style="color: orange;">No respondido</span>'; break;
    default: rb='<span style="color: red;">Incorrecto</span>'; break;
}
document.getElementById("rbg").innerHTML=rb;

document.getElementById("notab").innerHTML=(((acertadas/7)*10)/2).toFixed(1);
}