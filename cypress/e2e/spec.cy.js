
describe('The Home Page', () => {
  it('does not show create recipe when not logged in', () => {
       cy.visit('https://craveaway.vercel.app/');
       cy.get(
        '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
      ).click();
      cy.url().should('include', '/createrecipe');
      cy.get('.MuiContainer-root > .MuiPaper-root').contains('must login')
    });
  });
  
  //generic visit test
  it('visits site', () => {
      cy.visit('https://craveaway.vercel.app/');
    });
  
  //searching displays correct info
  
    describe('Search recipe', () => { 
     
      it('tests the search feature/nutrition', () => { 
        cy.visit('https://craveaway.vercel.app/');
        cy.get('input').type('keto').should('have.value', 'keto');
        cy.get('[data-testid="SearchIcon"]').click();
        cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-crznwn > .MuiChip-root > .MuiChip-label').contains('Keto');
      });
      it('tests the search feature/title', () => { 
        cy.visit('https://craveaway.vercel.app/');
        cy.get('input').type('burger').should('have.value', 'burger');
        cy.get('[data-testid="SearchIcon"]').click();
        cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-1sod7l4 > .MuiTypography-root').contains('Burger')

      });
      it('tests the search feature/time', () => { 
        cy.visit('https://craveaway.vercel.app/');
        cy.get('input').type('30').should('have.value', '30');
        cy.get('[data-testid="SearchIcon"]').click();
        cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-1sod7l4 > .mui-style-70qvj9').contains('21-30 mins')
      });
      it('tests the search feature/no results', () => { 
        cy.visit('https://craveaway.vercel.app/');
        cy.get('input').type('sushi').should('have.value', 'sushi');
        cy.get('[data-testid="SearchIcon"]').click();
        cy.get(':nth-child(5) > .MuiContainer-root > .MuiBox-root > .MuiTypography-root').contains('no results')
      });
    });
  
  describe('Checks that you cannot submit a recipe without filling all the information out', () => {
    it('logs in through auth0', () => {
      cy.visit('https://craveaway.vercel.app/');
      cy.get('.burger-menu').click();
      cy.get('.mui-style-1ru9yzr > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
  
      cy.origin('https://dev-eotu3qte.us.auth0.com', () => {
        cy.get('#email').type(Cypress.env('USERNAME'));
        cy.get('#password').type(Cypress.env('PASSWORD'));
        // cy.contains('Log In').click(); can do this or:
        cy.get('#btn-login').click();
      });
      cy.url().should('include', 'craveaway');
  
      cy.get(
        '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
      ).click();
      cy.get('.mui-style-6kej9x > .MuiInputBase-root').type('Test');
      // cy.get(':nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click().parent().trigger('keydown', {
      //   key: 'Enter',
      // })
      cy.get('.MuiButton-sizeLarge').click();
      cy.get('.MuiAlert-message').contains('must fill out');
    });
  });
  
  
  describe('Clicking on an ingredient adds it onto the shopping list in profile', () => {
    it('logs in through auth0', () => {
    cy.visit('https://craveaway.vercel.app/');
    cy.get('.burger-menu').click();
    cy.get('.mui-style-1ru9yzr > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
  
    cy.origin('https://dev-eotu3qte.us.auth0.com', () => {
      cy.get('#email').type(Cypress.env('USERNAME'));
      cy.get('#password').type(Cypress.env('PASSWORD'));
      cy.get('#btn-login').click();
    });
    cy.url().should('include', 'craveaway');
  
    cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-1sod7l4').click();
    cy.url().should('include', 'post');
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiChip-label').click();
    cy.get('.MuiToolbar-root > :nth-child(2) > svg > path').click();
    
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
    cy.url().should('include', 'profile');
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiChip-label').last().contains("cheese");
    })});
  
  