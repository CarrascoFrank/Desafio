/// <reference types="cypress" />


function getPositiveNumber(){
  return cy.request({
    method:'GET',
    url: '/en/156',
    failOnStatusCode: false,
  })
}
export{getPositiveNumber};