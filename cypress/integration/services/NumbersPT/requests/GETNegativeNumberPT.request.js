/// <reference types="cypress" />


function getNegativeNumberPT(){
  return cy.request({
    method:'GET',
    url: '/-2021',
    failOnStatusCode: false,
  })
}
export{getNegativeNumberPT};