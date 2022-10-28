let nakamas = {
	nome: "Tripulação mugiwara",
	navio: "Sunny go",
	recompensaTotal: 3000000,
	specialAction: function(){
			alert("Santoryiu");
			alert("Diable Jump");
			alert("Gomu gomu no gatling gun");
	},
    tripulacao: ["Luffy", "Sanji", "Zoro"]
}

// nakamas.adicionandoTripulantes = function(objetoTripulacao, nomeTripulante){
//     objetoTripulacao.tripulacao.push(nomeTripulante);
// }

nakamas.adicionandoTripulantes = function(nomeTripulante){
    this.tripulacao.push(nomeTripulante);
}

console.log(nakamas.tripulacao);

nakamas.adicionandoTripulantes("Usopp");

console.log(nakamas.tripulacao);

