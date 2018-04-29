//Escolher uma posição aleatória entre 1 e 30
    var posicaoAleatoria = 1 + Math.floor(Math.random() * 28);

    var parte1 = posicaoAleatoria;
    var parte2 = parte1 +1;
    var parte3 = parte2 +1;
	var parte4 = parte3 +1;

	var jogada;
	var atingidas = 0;
	var totalJogadas = 0;

	var foiAfundado = false;

while (foiAfundado == false) { //Enquanto o barco não for afundado, o jogo irá pedir uma jogada nova

   jogada = prompt("Escolhe um numero entre 1 e 30:");

   if (jogada < 1 || jogada > 30) { //Se o número dado não estiver dentro do domínio contemplado, a jogada será inválida

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;//Por cada número dado, será adiciona como uma jogada feita

      if (jogada == parte1 || jogada == parte2 || jogada == parte3 || jogada ==parte4) { //De cada vez que se acerta no número aleatoriamente escolhido aparecerá a seguinte mensagem

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 4) { //Quando as quatro partes forem afundadas o jogo terminará

            foiAfundado = true;

            alert("Navio totalmente afundado!"); 

         }

      } else {

         alert("Falhaste..."); //De cada vez que se falha um número, aparecerá a seguinte mensagem 

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + //Pega no número de partes a afundar e no número de tentativas feitas para calcular a eficácia do jogador 
                          "o que quer dizer que a tua pontaria foi de " + (4/totalJogadas);

alert(estatistica);
