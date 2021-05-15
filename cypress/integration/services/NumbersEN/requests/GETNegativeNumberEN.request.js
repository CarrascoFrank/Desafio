/// <reference types="cypress" />


function getNegativeNumberEN(){
  return cy.request({
    method:'GET',
    url: '/en/-2021',
    failOnStatusCode: false,
  })
}
export{getNegativeNumberEN};