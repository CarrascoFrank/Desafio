/// <reference types="cypress" />


function numberPositiveOutOfRange(){
  return cy.request({
    method:'GET',
    url: '/10001',
    failOnStatusCode: false,
  })
}
export{numberPositiveOutOfRange};