describe('HTML Table Testing - W3Schools', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp');
  });

  it('TC01 - Should display the table', () => {
    cy.get('#customers').should('be.visible');
  });

  it('TC02 - Should contain correct headers', () => {
    cy.get('#customers th').then(headers => {
      const headerTexts = [...headers].map(h => h.innerText.trim());
      expect(headerTexts).to.deep.eq(['Company', 'Contact', 'Country']);
    });
  });

  it('TC03 - Should have 7 rows including header', () => {
    cy.get('#customers tr').should('have.length', 7); // 1 header + 6 data rows
  });

  it('TC04 - Should have 6 data rows', () => {
    cy.get('#customers tr').not(':first').should('have.length', 6);
  });

  it('TC05 - Should validate specific cell value (2nd row, 2nd column)', () => {
    cy.get('#customers tr').eq(2).find('td').eq(1).should('have.text', 'Maria Anders');
  });

  it('TC06 - Should check that "Island Trading" exists in the Company column', () => {
    cy.get('#customers td:first-child').should('contain.text', 'Island Trading');
  });

  it('TC07 - Should print all company names', () => {
    cy.get('#customers td:first-child').each(($el, index) => {
      cy.log(`Company ${index + 1}: ${$el.text()}`);
    });
  });

  it('TC08 - Verify country for "Giovanni Rovelli"', () => {
    cy.get('#customers tr').each($row => {
      if ($row.text().includes('Giovanni Rovelli')) {
        cy.wrap($row).find('td').eq(2).should('have.text', 'Italy');
      }
    });
  });
});
