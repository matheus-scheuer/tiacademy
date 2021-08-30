// Objetos

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa ("Ricardo", "Pereira", 19);
console.log("Nome: " + ps1.nome + ps1.sobrenome + " Idade:" + ps1.idade)

var ps2 = new Pessoa ("Rosana");
console.log ("Nome:" + ps2.nome + " " +ps2.sobrenome);

var objPessoa = {rg : '88452' , cpf : "6564646" }
//console.log (typeof(objPessoa));
console.log("RG:" + objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
this.nome = nome;
this.sobrenome = sobrenome;
this.idade = idade;
this.doc = {
	rg: "123456789",
	cpf: "987654321"
	}
}

var pessoa2 = new Pessoa2("Joana");
//console.log("Nome: " + pessoa2.nome+ " " + pessoa2.doc.rg);
console.log("Nome $ {pessoa2.nome}  - Rg: $ {pessoa2.doc.rg}");