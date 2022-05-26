const calculadora = require('../calculadora')



test("A soma de 5 + 5 deve retornar 10",()=>{

    expect(calculadora.soma(5,5)).toEqual(10)
    
})

test("Concatenacao",()=>{

    expect(calculadora.soma('5',5)).not.toEqual('55')
})

test("A subtracao de 4-2 deve ser 2",()=>{

    expect(calculadora.subtracao(4,2)).toEqual(2)
})

test("A multiplicacao de 10x2 deve ser 20",()=>{

    expect(calculadora.multiplicacao(10,2)).toEqual(20)
})

test("A divisao de 4/2 deve ser 2",()=>{

    expect(calculadora.divisao(4,0)).toEqual(2)
})

