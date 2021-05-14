import * as getPositiveNumber from '../requests/GETPositiveNumberPT.request';
import * as getNoNullNumber from '../requests/GETNumberNotNullPT.request';
import * as getLimitNumberPositive from '../requests/GETLimitNumberPositivePT.request';

describe("Cenarios de teste com valores positivos", () => {
  it('Verificando que o retorno da chamanda não seja valor null', () => {
    getNoNullNumber.NotNullNumber().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null;
    })
  })

  it('Verificando que o numero positivo venha por extenso', () => {
    getPositiveNumber.getPositiveNumber().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.extenso).to.be.eq("cento e cinquenta e seis")
    })
  })

  it('Verificando o numero limite positivo', () =>{
    getLimitNumberPositive.LimitNumberPositivePT().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.extenso).to.be.eq("dez mil")
    })
  })

})