import 'cypress-iframe';

describe('Iframe WYSIWYG Editor Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/iframe');
  });

  it('should load the page with iframe and header', () => {
    cy.contains('h3', 'An iFrame containing the TinyMCE WYSIWYG Editor').should('be.visible');
    cy.get('#mce_0_ifr').should('exist');
  });

  it('should type text into the editor iframe', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe().clear().type('Hello from Cypress!');
    cy.iframe().should('contain.text', 'Hello from Cypress!');
  });

  it('should clear default text inside iframe', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe().clear().should('have.text', '');
  });

  it('should format text using bold button', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.get('button[aria-label="Bold"]').click();
    cy.iframe().type('Bold Text');
    cy.iframe().find('strong').should('exist').and('contain', 'Bold Text');
  });

  it('should undo typed text using toolbar', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe().clear().type('Undo Test');
    cy.get('button[aria-label="Undo"]').click();
    cy.iframe().should('not.contain', 'Undo Test');
  });

  it('should redo text after undo', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe().clear().type('Redo Test');
    cy.get('button[aria-label="Undo"]').click();
    cy.get('button[aria-label="Redo"]').click();
    cy.iframe().should('contain', 'Redo Test');
  });
});
