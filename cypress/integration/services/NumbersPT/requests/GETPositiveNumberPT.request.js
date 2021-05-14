/// <reference types="cypress" />


function getPositiveNumber(){
  return cy.request({
    method:'GET',
    url: '/156',
    failOnStatusCode: false,
  })
}
export{getPositiveNumber};