/// <reference types="cypress" />

function limitNumberNegativeEN(){
  return cy.request({
    method:'GET',
    url: '/en/-10000',
    failOnStatusCode: false,
  })
}
export{limitNumberNegativeEN};