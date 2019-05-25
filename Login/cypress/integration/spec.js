

describe('The Login Test', function() {
  it('Successfully load wolframalpha', function() {
    cy.visit('https://www.wolframalpha.com/', {failOnStatusCode: false}) 
    cy.contains('Sign in').click({force: true})
  })
  
  it('Login to wolframalpha', function(){
  cy.get('input[type="email"]').type("darabkiyani55@gmail.com")
  cy.get('input[type="password"]').type("logintest")
  cy.get('[type="checkbox"]').uncheck() 
  cy.contains('Sign in').click()
  })

  it('Enter a Query', function(){
  cy.get('#query').type("APPL")
  cy.get('#input > fieldset > div > input.eq').click({force: true})
  cy.wait(5000)
  })

  it('Verify the result', function(){
  cy.contains('apple')
})

  it('Verifying profile change', function(){
  cy.wait(5000)
  cy.contains('Account').click({force: true})
  cy.wait(5000)
  cy.contains('Wolfram ID').click({force: true})
  cy.get('#id-details > div:nth-child(2) > div').should('contain', 'Darab')
  cy.get('#id-details > div:nth-child(2) > a').click({force: true})
  cy.get('#form-container > wolfram-form > div > form > wolfram-form-field.ng-tns-c14-1 > div > input').type(' M')
  cy.get('#form-container > wolfram-form > div > form > div > button').click({force: true})
  cy.get('body > account-root > account-change-name > div > div > div > div > a').click({force: true})
  cy.get('#id-details > div:nth-child(2) > div').should('contain', 'Darab M')
  cy.get('#id-details > div:nth-child(2) > a').click({force: true})
  cy.wait(5000)
  cy.get('#form-container > wolfram-form > div > form > wolfram-form-field.ng-tns-c14-3 > div > input').click().clear().type('Darab')
  cy.wait(2000)
  cy.get('#form-container > wolfram-form > div > form > div > button').click({force: true})
  cy.wait(2000)
  cy.get('body > account-root > account-change-name > div > div > div > div > a').click({force: true})
  cy.get('#id-details > div:nth-child(2) > div').should('contain', 'Darab')
  })

  it('Logout', function(){
  cy.contains('Sign out').click({force: true})
  })
})
