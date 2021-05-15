import * as getPositiveNumberEN from '../requests/GETPositiveNumberEN.request';
import * as getNotNullNumberEN from '../requests/GETNumberNotNullEN.request';
import * as getLimitNumberPositiveEN from '../requests/GETLimitNumberPositiveEN.request';


describe("Cenarios de teste com valores positivos em Ingles", () => {
  
  it('Verificando que o retorno da chamanda não seja valor null', () => {
    getNotNullNumberEN.NotNullNumberEN().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null;
    })
  })

  it('Verificando que o numero positivo venha por extenso', () => {
    getPositiveNumberEN.getPositiveNumber().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.full).to.be.eq("one hundred and fifty-six")
    })
  })

  it('Verificando o numero limite positivo', () =>{
    getLimitNumberPositiveEN.LimitNumberPositiveEN().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.full).to.be.eq("ten thousand")
    })
  })

})