
/*

	var / let const

*/
/*var nome="Matheus"; // var global
let sobreNome = "Scheuer"
if(true){
	console.log("Var nome "+nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+sobreNome)
	let sn = "Da Silvera"
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sobreNome+" "+sn)
console.log("Var nome= "+ nm)
*/


var Pessoa = {
		nome: "Matheus",
		rua: "Rua Moscados",
		ncasa: "74",
		dados: function(){
			document.write(
				"Nome...."+this.nome+"<br>"+
				"Rua ...."+this.rua+"<br>"+
				"N. casa...."+this.ncasa+"<br>"
			)
	}
}

Pessoa.dados();
/*console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" Número da casa "+Pessoa.ncasa)*/