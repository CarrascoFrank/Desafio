import * as getInvalidDataByCharacter from '../requests/GETInvalidDataByCharacters.request';
import * as getInvalidDataByNumberPositiveOutOfRange from '../requests/GETInvalidDataByNumberPositiveOutOfRange.request';
import * as getInvalidDataByNumberNegativeOutOfRange from '../requests/GETInvalidDataByNumberNegativeOutOfRange.request';

describe("Cenarios de teste com valores invalidos", () => {

  it('Verificando o envio de caracteres com retorno de dado invalido (401)', () => {
    getInvalidDataByCharacter.characterInvalidData().should((response)=>{
      expect(response.status).to.eq(401)
      expect(response.body.extenso).to.be.eq("Invalid data")
    })
  })

  it('Verificando o envio de numero positivo fora do alcance com retorno de dado invalido', () => {
    getInvalidDataByNumberPositiveOutOfRange.numberPositiveOutOfRange().should((response)=>{
      expect(response.status).to.eq(400)
      expect(response.body.extenso).to.be.eq("Invalid data")
    })
  })

  it('Verificando o envio de numero negativo fora do alcance com retorno de dado invalido', () => {
    getInvalidDataByNumberNegativeOutOfRange.numberNegativeOutOfRange().should((response)=>{
      expect(response.status).to.eq(400)
      expect(response.body.extenso).to.be.eq("Invalid data")
    })
  })


})