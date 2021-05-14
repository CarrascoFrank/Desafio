/// <reference types="cypress" />


function numberNegativeOutOfRange(){
  return cy.request({
    method:'GET',
    url: '/-10001',
    failOnStatusCode: false,
  })
}
export{numberNegativeOutOfRange};