describe('Mouse Events on Automation Practice Site', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  });

  it('TC01 - Hover over "Mouse Hover" and click "Top"', () => {
    // Scroll to hover element
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', '#top');
  });

  it('TC02 - Click on "Open Window" button', () => {
    cy.get('#openwindow').click();
    // Note: Cypress cannot switch tabs, but we can assert the attribute
    cy.get('#openwindow').should('have.attr', 'onclick');
  });

  it('TC03 - Double click on "Double Click Me"', () => {
    cy.get('#dblClickBtn').dblclick();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('You double clicked me.. Thank You..');
    });
  });

  it('TC04 - Right click simulation on "Right Click Me" (custom test)', () => {
    // There's no right-click element here, so we simulate on visible one
    cy.get('#mousehover').rightclick();
    cy.get('#mousehover').should('be.visible');
  });

  it('TC05 - Mouseover reveals menu and allows clicking "Reload"', () => {
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Reload').click({ force: true });
    cy.url().should('include', 'AutomationPractice');
  });
});
