describe('Google Translate Dropdowns and Text Translation (Fixed)', () => {

  const sourceTextArea = 'textarea[aria-label="Source text"]';

  beforeEach(() => {
    cy.visit('https://translate.google.com');
  });

  it('Selects source language (Spanish)', () => {
    cy.get('[aria-label="More source languages"]')
      .filter(':visible')
      .eq(0)
      .click();

    cy.get('[role="menu"]:visible').should('exist');
    cy.contains('[role="option"]', 'Spanish', { timeout: 5000 })
      .scrollIntoView()
      .click({ force: true });

    cy.get('[aria-label="More source languages"]')
      .filter(':visible')
      .eq(0)
      .should('contain.text', 'Spanish');
  });

  it('Selects target language (French)', () => {
    cy.get('[aria-label="More target languages"]')
      .filter(':visible')
      .eq(0)
      .click();

    cy.get('[role="menu"]:visible').should('exist');
    cy.contains('[role="option"]', 'French', { timeout: 5000 })
      .scrollIntoView()
      .click({ force: true });

    cy.get('[aria-label="More target languages"]')
      .filter(':visible')
      .eq(0)
      .should('contain.text', 'French');
  });

  it('Translates "Hola" from Spanish to French', () => {
    cy.get('[aria-label="More source languages"]')
      .filter(':visible')
      .eq(0)
      .click();

    cy.contains('[role="option"]', 'Spanish').scrollIntoView().click({ force: true });

    cy.get('[aria-label="More target languages"]')
      .filter(':visible')
      .eq(0)
      .click();

    cy.contains('[role="option"]', 'French').scrollIntoView().click({ force: true });

    cy.get(sourceTextArea).first().type('Hola');

    cy.get('.ryNqvb', { timeout: 10000 }).should('contain.text', 'Bonjour');
  });

  it('Swaps source and target languages', () => {
    // Only available after languages are selected
    cy.get('[aria-label="More source languages"]')
      .filter(':visible')
      .eq(0)
      .click();
    cy.contains('[role="option"]', 'Spanish').click({ force: true });

    cy.get('[aria-label="More target languages"]')
      .filter(':visible')
      .eq(0)
      .click();
    cy.contains('[role="option"]', 'French').click({ force: true });

    cy.get('[aria-label="Swap languages"]').click({ force: true });

    cy.get('[aria-label="More source languages"]').eq(0).should('contain.text', 'French');
    cy.get('[aria-label="More target languages"]').eq(0).should('contain.text', 'Spanish');
  });

  it('Clears the source text area', () => {
    cy.get(sourceTextArea).type('Hola');
    cy.get('[aria-label="Clear source text"]').click({ force: true });
    cy.get(sourceTextArea).should('have.value', '');
  });

});
