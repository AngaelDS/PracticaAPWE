const bebidas=document.getElementsByTagName('li');
var elegida=bebidas[3].innerHTML;
document.getElementById('resultado').innerHTML=elegida;


const objetos=document.getElementsByName('cajaInput');
document.getElementById('demo1').innerHTML=objetos[1].tagName;

var cantidad=document.getElementsByName('cajaInput').length;
document.getElementById('demo2').innerHTML="La cantidad es "+cantidad;

function calcular(){
const numero=document.getElementById('bebida').value;
const bebidas2=document.getElementsByName('lista1');
eleccion=numero-1;
var elegida2=bebidas2[eleccion].innerHTML;
var x=document.getElementById('cuantas').value;
alert(x)
var final=0;
switch(eleccion){
    case 0:
        final=x*45;
        break;
    case 1:
        final=x*35;
        break;
    case 2:
        final=x*20;
        break;
    case 3:
        final=x*60;
        break;
    case 4:
        final=x*25;
        break;
}

document.getElementById('resultado2').innerHTML= "Elegiste la bebida: " + elegida2 + " Con la cantidad de " + x + " Con un costo de: " + final;
}

function accion1(){
    
    const imagenes = document.getElementsByTagName("img");
    const contador = document.getElementById("resultado4");

    contador.textContent = imagenes.length;
}

function accion2(){
    
const numero2=document.getElementById('temas').value;
const temas2=document.getElementsByName('listatemas');
eleccion2=numero2-1;
var elegida3=temas2[eleccion2].innerHTML;
switch(eleccion2){
        case 0:
            document.getElementById('tema2').style.display="none";
            document.getElementById('tema3').style.display="none";
            break;
        case 1:
            document.getElementById('tema1').style.display="none";
            document.getElementById('tema3').style.display="none";
            break;
        case 2:
            document.getElementById('tema1').style.display="none";
            document.getElementById('tema2').style.display="none";
            break;
}

document.getElementById('resultado5').innerHTML= "Elegiste el tema: " + elegida3;
}

function accion3(){
    const opcion1 = document.getElementById("opcion1");
    const opcion2 = document.getElementById("opcion2");
    const opcion3 = document.getElementById("opcion3");
    document.getElementById('tema1').style.display="none";
    document.getElementById('tema2').style.display="none";
    document.getElementById('tema3').style.display="none";

      if (opcion1.checked) {
        document.getElementById('tema2').style.display="";
        document.getElementById('tema3').style.display="";
      }
      if (opcion2.checked) {
        document.getElementById('tema1').style.display="";
        document.getElementById('tema3').style.display="";
      }
      if (opcion3.checked) {
        document.getElementById('tema1').style.display="";
        document.getElementById('tema2').style.display="";
      }

}