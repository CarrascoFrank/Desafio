/// <reference types="cypress" />


function getPropertyBody(){
  return cy.request({
    method:'GET',
    url: '/0',
    failOnStatusCode: false,
  })
}
export{getPropertyBody};