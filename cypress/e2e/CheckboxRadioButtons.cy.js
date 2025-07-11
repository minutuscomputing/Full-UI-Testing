describe('DemoQA Radio and Checkbox Tests', () => {

  it('should select a radio button and verify the result', () => {
    cy.visit('https://demoqa.com/radio-button');
    cy.contains('label', 'Yes').click();
    cy.get('.text-success').should('have.text', 'Yes');
    cy.contains('label', 'Impressive').click();
    cy.get('.text-success').should('have.text', 'Impressive');
    cy.get('#noRadio').should('be.disabled');
  });

  it('should select checkboxes and verify selections', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.get('.rct-checkbox').first().click();
    cy.contains('span.rct-title', 'Desktop').click();
    cy.contains('span.rct-title', 'Downloads').click();
    cy.get('#result').should('contain.text', 'desktop');
    cy.get('#result').should('contain.text', 'downloads');
  });

});
