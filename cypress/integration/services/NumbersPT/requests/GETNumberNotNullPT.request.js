/// <reference types="cypress" />


function NotNullNumber(){
  return cy.request({
    method:'GET',
    url: '/1',
    failOnStatusCode: false,
  })
}
export{NotNullNumber};