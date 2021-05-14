/// <reference types="cypress" />


function LimitNumberNegativePT(){
  return cy.request({
    method:'GET',
    url: '/-10000',
    failOnStatusCode: false,
  })
}
export{LimitNumberNegativePT};