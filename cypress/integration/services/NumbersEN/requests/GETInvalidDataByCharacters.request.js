/// <reference types="cypress" />


function characterInvalidDataEN(){
  return cy.request({
    method:'GET',
    url: '/en/abc',
    failOnStatusCode: false,
  })
}
export{characterInvalidDataEN};