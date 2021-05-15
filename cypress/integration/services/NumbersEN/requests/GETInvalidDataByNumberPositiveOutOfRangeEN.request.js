/// <reference types="cypress" />


function numberPositiveOutOfRangeEN(){
  return cy.request({
    method:'GET',
    url: '/en/10001',
    failOnStatusCode: false,
  })
}
export{numberPositiveOutOfRangeEN};