/// <reference types="cypress" />


function numberNegativeOutOfRangeEN(){
  return cy.request({
    method:'GET',
    url: '/en/-10001',
    failOnStatusCode: false,
  })
}
export{numberNegativeOutOfRangeEN};