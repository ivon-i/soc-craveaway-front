/// <reference types="cypress"/>

// describe the test suite

describe('The Home Page', () => {
  it('visits site', () => {
    cy.visit('http://localhost:3000/');
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

// describe('Craveaway', () => {
//   it('selects the hamburger menu button');
// });

// describe('Visit homepage', () => {
//   it('visits the app url', () => {
//     cy.visit('https://craveaway.vercel.app/');
//   });
// });

// // +Create recipe button test
// describe('Click +Create recipe button', () => {
//   it('checks if it is a button', () => {
//     cy.get(
//       '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
//     );
//   });
// });
