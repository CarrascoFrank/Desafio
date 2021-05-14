import * as getNegativeNumberPT from '../requests/GETNegativeNumberPT.request';
import * as getLimitNumberNegative from '../requests/GETLimitNumberNegativePT.request';


describe("Cenarios de teste com valor negativo em portugues", () => {
  it('Verificando que o numero negativo venha por extenso', () => {
    getNegativeNumberPT.getNegativeNumberPT().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.extenso).to.be.eq("menos dois mil e vinte e um")
    })
  })

  it('Verificando o numero limite negativo', () =>{
    getLimitNumberNegative.LimitNumberNegativePT().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.extenso).to.be.eq("menos dez mil")
    })
  })

})