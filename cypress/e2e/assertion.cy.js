describe('Wikipedia Homepage Tests (Updated)', () => {

 beforeEach(() => {
    cy.visit('https://www.wikipedia.org/');
  });

  it('Should load the Wikipedia homepage and check title', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.title().should('include', 'Wikipedia');
  });

  it('Should display the Wikipedia globe logo', () => {
    cy.get('.central-featured-logo').should('be.visible');
  });

  it('Should show English as a language option', () => {
    cy.get('a#js-link-box-en').should('be.visible').and('contain.text', 'English').click();
  });

  it('Should navigate to English Wikipedia when clicking English', () => {
    cy.get('a#js-link-box-en').click();
    cy.url().should('include', 'en.wikipedia.org');
    cy.get('h1#firstHeading').should('contain.text', 'Welcome to Wikipedia');
  });

  it('Should search for "Cypress.io" on English Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page');
    cy.get('input[name="search"]').first().type('Cypress.io{enter}');
    cy.url().should('include', 'Cypress.io');
    cy.get('#firstHeading').should('contain.text', 'Cypress.io');
  });

});
