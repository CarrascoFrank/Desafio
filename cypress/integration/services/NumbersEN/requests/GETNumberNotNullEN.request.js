/// <reference types="cypress" />

function NotNullNumberEN(){
  return cy.request({
    method:'GET',
    url: '/1',
    failOnStatusCode: false,
  })
}
export{NotNullNumberEN};