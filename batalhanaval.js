
    var posicaoAleatoria = 1 + Math.floor(Math.random() * 28);

    var parte1 = posicaoAleatoria;
    var parte2 = parte1 +1;
    var parte3 = parte2 +1;
	var parte4 = parte3 +1;

	var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");

   if (jogada < 1 || jogada > 30) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3 || jogada ==parte4) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 4) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (4/totalJogadas);

alert(estatistica);
