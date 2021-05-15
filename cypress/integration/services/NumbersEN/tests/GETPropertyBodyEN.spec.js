import * as getPropertyBodyEN from '../requests/GETPropertyBodyEN.request';

describe("Cenarios de teste para as propriedades do body do request", () => {
  it('Verificando que o retorno da chamanda a propridade do body', () => {
    getPropertyBodyEN.getPropertyBodyEN().should((response)=>{
      expect(response.status).to.eq(200)
      
      expect(response.body).to.have.property('full');
    })
  })
})