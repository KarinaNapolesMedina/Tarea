var op=true; // declaracion de una variable booleana

var palabra=prompt("Escribe una palabra").toLowerCase();//captar lo ingresado y pasa todo a minusculas
 
var palabra1=palabra.replace(/ /g, "");//la palabra ingresada se le quitan los espacios que tiene 
 
	for (var i=0;i<palabra1.length;i++){//se empieza un ciclo dependiendo el numero de letras que tienen la palabra
		if(palabra1[i]!=palabra1[palabra1.length-i-1]){//se hace una comparacion para verificar si es una palabra polindroma
			op= false;
		}
	}
	
if(op==true){
	console.log("La palabra ingresada " +palabra+" es un palíndromo");
}else{
	console.log("La palabra ingresada " +palabra+" No es un palíndromo");
}