/// <reference types="cypress" />


function getPropertyBodyEN(){
  return cy.request({
    method:'GET',
    url: '/en/0',
    failOnStatusCode: false,
  })
}
export{getPropertyBodyEN};