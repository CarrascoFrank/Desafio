import * as getInvalidDataByNumberNegativeOutOfRangeEN from '../requests/GETInvalidDataByNumberNegativeOutOfRangeEN.request';
import * as getInvalidDataByNumberPositiveOutOfRangeEN from '../requests/GETInvalidDataByNumberPositiveOutOfRangeEN.request';
import * as getInvalidDataByCharacterEN from '../requests/GETInvalidDataByCharacters.request';


describe("Cenarios de teste com valores invalidos na rota /EN", () => {
  
  it('Verificando o envio de caracteres com retorno de dado invalido ', () => {
    getInvalidDataByCharacterEN.characterInvalidDataEN().should((response)=>{
      expect(response.status).to.eq(400)
      expect(response.body.full).to.be.eq("Invalid data")
    })
  })
  
  it('Verificando o envio de numero negativo fora do alcance com retorno de dado invalido [401]', () => {
    getInvalidDataByNumberNegativeOutOfRangeEN.numberNegativeOutOfRangeEN().should((response)=>{
      expect(response.status).to.eq(401)
      expect(response.body.full).to.be.eq("Invalid data")
    })
  })

  it('Verificando o envio de numero negativo fora do alcance com retorno de dado invalido com status code [400]', () => {
    getInvalidDataByNumberNegativeOutOfRangeEN.numberNegativeOutOfRangeEN().should((response)=>{
      expect(response.status).to.eq(400)
      expect(response.body.full).to.be.eq("Invalid data")
    })
  })

  it('Verificando o envio de numero positivo fora do alcance com retorno de dado invalido [401]', () => {
    getInvalidDataByNumberPositiveOutOfRangeEN.numberPositiveOutOfRangeEN().should((response)=>{
      expect(response.status).to.eq(401)
      expect(response.body.full).to.be.eq("Invalid data")
    })
  })

  it('Verificando o envio de numero positivo fora do alcance com retorno de dado invalido com status code [400]', () => {
    getInvalidDataByNumberPositiveOutOfRangeEN.numberPositiveOutOfRangeEN().should((response)=>{
      expect(response.status).to.eq(400)
      expect(response.body.full).to.be.eq("Invalid data")
    })
  })



})