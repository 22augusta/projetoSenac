const input = require('readline-sync');

// Declarar as variaveis. 

dicas = ['É um herói.', 'A segunda dica é: da Disney.', 'Então vamos para a terceira: faz parte da Marvel', 'Ainda não? Tem vermelho no uniforme.', 'Agora você consegue: é amigo de Tony Stark.']

i = 0;

personagem = String

dsuficiente = '';

console.log('Bem-vindo à nossa charada! Nós falaremos sobre um personagem e você tentará adivinhar! \n Será voce o novo Sherlock Holmes?')
console.log('Algumas instruções para jogar: \n -Primeira: Para as perguntas, digite sim ou nao; \n -Segunda: Voce tem direito a 5 dicas. Se usar todas e não for suficiente, o jogo termina. \n Terceira: É só isso mesmo. Pode jogar.')

var questao = input.question('Gostaria de comecar agora? ');
if (questao === 'sim') {
    console.log('Beleza, aqui vai a primeira dica.')
}  else if (questao === 'nao') {
    console.log('Então fique sem jogar. Caso mude de ideia, reinicie o jogo :)')
    return
} else {
    console.log('Digite apenas sim ou nao. Reinicie o jogo.')
    return                                       //usei o return como se fosse um break, já que ele não funciona no "if, else".
}

for (personagem != 'Homem-aranha' || 'homem-aranha';i < dicas.length;){               //removi -> continuar == 'nao' e reorganizei a estrutura.
    console.log(dicas[i])
    var dsuficiente = input.question('A dica foi suficiente para voce? ');
        if (dsuficiente === 'sim'){
        var personagem = input.question('Digite o nome do personagem: ');
             if (personagem == 'Homem-aranha' || personagem == 'homem-aranha'){
            console.log('Voce acertou. Fim de jogo')
            break
        }   else {
            console.log('Você errou.')
            var continuar = input.question('Gostaria de continuar o jogo? ')
                if (continuar === 'sim'){
                    console.log(dicas[i])
                }
                else if (continuar === 'nao'){
                    console.log('Eu achava que os brasileiros não desistiam fácil. Estou enganado?')
                    break
                } else {
                    console.log('Digite apenas sim ou nao! \n Reinicie o jogo.')
                    break
                }
        }
    } else if (dsuficiente === 'nao') {
        console.log(dicas[i])

    } else {
        console.log('Digite apenas sim ou nao. Eu falei isso nas instruções, meu jovem. Tenha paciência e recomeçe o jogo!')
        return
    }
        i++}