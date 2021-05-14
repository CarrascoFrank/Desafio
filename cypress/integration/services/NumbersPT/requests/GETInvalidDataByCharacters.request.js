/// <reference types="cypress" />


function characterInvalidData(){
  return cy.request({
    method:'GET',
    url: '/abc',
    failOnStatusCode: false,
  })
}
export{characterInvalidData};