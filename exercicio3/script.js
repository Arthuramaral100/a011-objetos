const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

let pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques = [] // <- criei uma chave(propriedade) e dentro dela um array vazio
pokemon1.ataques.push({nome: "Investida",
dano: 40,
tipo: "Normal",
precisão: 100}) // ↑ joguei um objeto dentro do array criado

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

pokemon2.ataques = [...pokemon1.ataques] // <- criei uma chave(propriedade) "ataques" na cópia e puxei os dados dessa mesma chave(propriedade) no objeto original

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisão: 100
}
pokemon1.ataques.push(ataque2)

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

const ataque3 = { 
    ...ataque2, // <- puxei o objeto "ataque2" do original e alterei esses valores na cópia ↓
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisão: 100
}
pokemon2.ataques.push(ataque3)

// f) Imprima os dois objetos no console.

console.log("Pokedex", pokemon1);
console.log("Pokedex", pokemon2);




