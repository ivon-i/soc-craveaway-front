/// <reference types="cypress"/>

// describe the test suite

describe('The Home Page', () => {
  it('visits site', () => {
    cy.visit('https://craveaway.vercel.app/');
  });
  it('clicks the hamburger menu', () => {
    cy.get('.burger-menu').click();
  });
  // it('clicks the +Create recipe button', () => {
  //   cy.get(
  //     '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
  //   ).click();
  //   cy.url().should('include', '/createrecipe');
  //   cy.get('.mui-style-n6kfzp > .MuiButtonBase-root').contains('Login');
  // });
});

//generic visit test 
it('visits site', () => {
    cy.visit('https://craveaway.vercel.app/');
  });
  
  //searching displays correct info
  
  describe('Search recipe', () => {
    it('tests the search feature', () => {
      cy.visit('https://craveaway.vercel.app/');
      cy.get('input').type('keto').should('have.value', 'keto');
      cy.get('[data-testid="SearchIcon"]').click();
      cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-19midj6').contains('Keto');
    });
  });
  
  describe('Submits a recipe', () => {
  it('logs in through auth0', () => {
      cy.visit('https://craveaway.vercel.app/')
      cy.get('.burger-menu').click()
      cy.get('.mui-style-p4gg3y > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
      
      cy.origin("https://dev-659k2jkc.us.auth0.com/", () => {
          cy.get("#username").type(Cypress.env("USERNAME"));
          cy.get("#password").type(Cypress.env("PASSWORD"));
          cy.contains("Continue").click();
          });
    });
  
    //once auth0 test works, should fill out each input field in createrecipe and submit
  
  });
  