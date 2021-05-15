/// <reference types="cypress" />

function LimitNumberPositiveEN(){
  return cy.request({
    method:'GET',
    url: '/en/10000',
    failOnStatusCode: false,
  })
}
export{LimitNumberPositiveEN};