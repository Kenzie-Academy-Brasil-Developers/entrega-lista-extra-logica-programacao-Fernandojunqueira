function calculateSalary(salarioFixo,vendas){

    let comissao = vendas <= 1200 ? vendas*0.03 : 1200*0.03 + (vendas-1200)*0.05
    let salarioTotal = salarioFixo + comissao

     return salarioTotal
  
  }
  console.log(calculateSalary(2000,5000))
  
  function cashMachine(valorSaque,salarioFixo,vendas){
  
      let notas = [200,100,50,20,10,5,2]
      let qtdNotas = []
      let qtdNotas1 = []
      let saldo = calculateSalary(salarioFixo,vendas) - valorSaque
  
      for( let i = 0; i < notas.length; i++){
  
              
              let text2 = parseInt(valorSaque/notas[i]) + " notas de R$" + notas[i]
              qtdNotas.push(text2)
              valorSaque = valorSaque % notas[i]
          
      }
      for( let j = 0; j < qtdNotas.length; j++){
  
          if( qtdNotas[j][0] != 0 ){
  
              qtdNotas1.push(qtdNotas[j])
  
          }
  
      }
  
      qtdNotas1.push('Saldo atual: R$'+ saldo )
  
      return qtdNotas1.join(', ')
  
  }
  console.log(cashMachine(1987,2000,5000))
  
  function calculateStock(estoque,qtdMaxima,qtdMinima){
  
      let qtdMedia = (qtdMaxima - qtdMinima)/2
  
      if(estoque >= qtdMedia){
  
          return 'Não efetuar compra'
  
      }else{
  
          return 'Efetuar compra'
  
      }  
  
  }
  
  console.log(calculateStock(120,600,200))
  

  // Considerando (1 ano = 12 meses) e (1 mês = 4 semana)
  function calculateAge(anoNascimento,anoAtual){

        let idade = anoAtual - anoNascimento
        
        return `Idade em anos: ${idade}, idade em meses: ${idade*12}, idade em semanas: ${idade*12*4}, idade em dias: ${idade*12*4*7}`
      
  }
  console.log(calculateAge(1995,2022))

  function getDiagonal(array){

        let diagonal = []
        for( let i = 0; i < array.length; i++ ){
            for( let j = 0; j < array.length; j++){

                if( i === j){

                    diagonal.push(array[i][j])

                }

            }
        }    
    return diagonal
  }
  
  console.log(getDiagonal([ [1, 2, 3,10] , [4, 5, 6,11] , [7, 8, 9,12] ,[13,14,15,16]]))