/// <reference types="cypress" />


function LimitNumberPositivePT(){
  return cy.request({
    method:'GET',
    url: '/10000',
    failOnStatusCode: false,
  })
}
export{LimitNumberPositivePT};