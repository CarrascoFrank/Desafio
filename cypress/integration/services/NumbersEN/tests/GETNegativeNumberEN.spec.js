import * as getNegativeNumberEN from '../requests/GETNegativeNumberEN.request';
import * as getLimitNegativeNumberEN from '../requests/GETLimitNumberNegativeEN.request';

describe("Cenarios de teste com valor negativo em ingles", () => {
  
  it('Verificando que o numero negativo venha por extenso', () => {
    getNegativeNumberEN.getNegativeNumberEN().should((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.full).to.be.eq("minus two thousand and twenty-one")
    })
  })

  it('Verificando o numero limite negativo com a propriedade full', () => {
    getLimitNegativeNumberEN.limitNumberNegativeEN().should((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.full).to.be.eq('minus ten thousand')
    })
  })

  it('Verificando o numero limite negativo sem a propriedade full', () => {
    getLimitNegativeNumberEN.limitNumberNegativeEN().should((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.eq('minus ten thousand')
    })
  })

})