import * as getPropertyBodyPT from '../requests/GETPropertyBodyPT.request';

describe("Cenarios de teste para as propriedades do body do requestem portugues", () => {
  it('Verificando que o retorno da chamanda a propridade do body', () => {
    getPropertyBodyPT.getPropertyBody().should((response)=>{
      expect(response.status).to.eq(200)
      
      expect(response.body).to.have.property('extenso');
    })
  })
})