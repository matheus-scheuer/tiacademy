var nome = prompt("Digite seu nome");

document.write("Seja bem vindo: " + nome + "<br>");

var numero = prompt("Seja bem vindo " + nome + ", agora digite um número");

alert("Você enviou uma " + typeof(numero))

alert("A " + typeof(numero) + " será convertida em um Number");

var numero = parseInt(numero)

document.write("Você digitou o número: " + numero + "<br>");

var valor = 15;

var booleana = (numero == valor);

document.write("O retorno da comparação booleana é:" + booleana + "<br>");

var soma = numero + valor;

document.write("A soma dos valores é: " + soma + "<br>") ;

var sub = numero - valor;

document.write("A subtração dos valores é: " + sub + "<br>");

var div = numero % valor;

document.write("O resto da divisão é de: " + div + "<br>");

var quad = numero*numero;

document.write("O quadrado do número digitado é de: " + quad + "<br>");

var fruta = prompt("Agora, por favor, escolha entre três frutas e digite-a abaixo: Laranja, Uva e Manga ");
switch(fruta){
	
	case "Laranja":
		document.write("A fruta escolhida foi " + fruta);
	break;
	case "Uva":
		document.write("A fruta escolhida foi " + fruta);
	break;
	case "Manga":
		document.write("A fruta escolhida foi " + fruta);
	break;
	default:
		document.write("A fruta " + fruta + " não está na lista");
	break;
}