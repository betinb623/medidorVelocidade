//Velocidade maxima até 80 km  
// a cada 1km voce ganha 1 ponto
// Math.Floor 
// caso pontos maior que 12 -> 'carteira suspendida'

verificarVelocidade(110);

function verificarVelocidade (velocidade) {
  const velocidadeMaxima = 80;
  const kmPorPonto = 5;
  const limitePontos = 8;
  
  if (velocidade <= 80) 
    console.log ('velocidade permitida');
  else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ));
    if (pontos >= limitePontos) {
      console.log ('Sua velocidade é',velocidade,'e você teve a carteira Suspensa');
    }  
    else {
      console.log ('Sua velocidade é',velocidade,'e você perdeu',pontos, 'pontos');
    }        
  }
}