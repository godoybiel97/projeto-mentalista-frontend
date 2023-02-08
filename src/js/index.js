var jogar = prompt('Você quer jogar com a máquina ? Responda Sim ou Não.');

if (jogar == 'Sim') {
  var numeroSecreto = parseInt(Math.random() * 101 - 1) + 1;
  var contador = 0;
  console.log(numeroSecreto);

  while (chute != numeroSecreto) {
    if (contador != 0) {
      alert('Você já fez ' + contador + ' tentativas !');
    }

    var chute = prompt('Digite um número entre 0 e 100:');
    if (chute == numeroSecreto) {
      alert('Parabéns ! Você acertou !');
    } else if (chute > numeroSecreto) {
      alert(
        'Errou ! O número secreto é menor que ' +
          chute +
          '. Tente mais uma vez !'
      );
    } else if (chute < numeroSecreto) {
      alert(
        'Errou ! O número secreto é maior que ' +
          chute +
          '. Tente mais uma vez !'
      );
    }

    contador++;
  }
}
