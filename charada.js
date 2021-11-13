const input = require('readline-sync');

// Declarar as variaveis. 

dicas = ['É um herói.', 'A segunda dica é: da Disney.', 'Então vamos para a terceira: faz parte da Marvel', 'Ainda não? Tem vermelho no uniforme.', 'Agora você consegue: é amigo de Tony Stark.']

i = 0;

personagem = String

dsuficiente = '';

console.log('Bem-vindo à nossa charada! Nós falaremos sobre um personagem e você tentará adivinhar! \n Será voce o novo Sherlock Holmes?')

var questao = input.question('Gostaria de comecar agora?');
if (questao === 'sim') {
    console.log('Beleza, aqui vai a primeira dica.')
}  else {
    console.log('Então fique sem saber.')
}

for (personagem != 'Homem-aranha';i < dicas.length;continuar == 'nao'){
    console.log(dicas[i])
    var dsuficiente = input.question('A dica foi suficiente para voce? Digite sim para tentar: ');
        if (dsuficiente === 'sim'){
        var personagem = input.question('Digite o nome do personagem: ');
             if (personagem == 'Homem-aranha'){
            console.log('Voce acertou. Fim de jogo')
        }   else {
            console.log('Você errou.')
            var continuar = input.question('Voce gostaria de continuar o jogo?')
                if ( continuar === 'nao'){
                break}
                else {

                }

        }
    }
        i++}