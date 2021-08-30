//   Arrays

var frutas = ["Uva", "Banana", "Pera", "Melão", "Amora"]; // var frutas = Array();
console.log(`Quantidade do Array: ${frutas.length} frutas: ${frutas[0]}`);

var frutas2 = ["Pêssego", "Maçã", "Pitaya"];

var todasAsFrutas = frutas.concat(frutas2);

console.log(frutas);
console.log(todasAsFrutas);

// indexOf() procura por um elemento no array e retorna;

var retornoIndexOf = todasAsFrutas.indexOf("UVa");
console.log(retornoIndexOf); 

// join() junta todos os elementos de um array em uma string;

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

// push() insere um novo elemento no final do array;

var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Carrinho");

console.log(novaLista);

console.log(outraLista);

console.log(outraLista[3]);

// pop() remove o último elemento do array;

console.log(outraLista.pop());

console.log(outraLista);

// reverse() inverte a ordem dos elementos da array

console.log(outraLista.reverse());

//shift() remove o primeiro elemento do array

var removerPrimeiro = ["Fusca", "Variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro.shift());

// sort() ordena os elementos do array em ordem crescente

var alfa = [4, 6, 9, 2];  
alfa.sort(); 
console.log(alfa);

// toString() converte um array em string e retorna essa string 

// unshift() insere um novo elemento no início do array

alfa.unshift(9);
console.log(alfa);
alfa.sort();
console.log(alfa);

// splice() corta o array em determinado ponto

var f = ["Uva", "Banana", "Pera", "Melão"];
var idx = f.indexOf("Banana"); 
console.log(idx);
console.log(f.splice(idx, 2)); 
console.log(f);


// arrays de objetos

var dados = [
    {nome: "Vitor"},
    {nome: "Gabriel"}
]

//console.log(dados[0].nome); // 0 = 1º posição
//console.log(dados[1].nome); // 1 = 2º posição

function Pessoa2(nome, sobrenome, idade, doc=[]){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = { 
        rg : doc[0],
        cpf : doc[1]
    }
}

var pessoa2 = new Pessoa2("Douglas", "", "", ["22", "555"]);
//console.log("Nome: " + pessoa2.nome + ", CPF: " + pessoa2.doc.cpf);
console.log("Nome: " + pessoa2.nome + ", CPF: " + pessoa2.doc.rg);