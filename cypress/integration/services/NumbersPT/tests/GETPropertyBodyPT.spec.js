import * as getPropertyBodyPT from '../requests/GETPropertyBodyPT.request';

describe("Cenarios de teste para as propriedades do body do request", () => {
  it('Verificando que o retorno da chamanda não seja valor null', () => {
    getPropertyBodyPT.getPropertyBody().should((response)=>{
      expect(response.status).to.eq(200)
      
      expect(response.body).to.have.property('extenso');
    })
  })
})