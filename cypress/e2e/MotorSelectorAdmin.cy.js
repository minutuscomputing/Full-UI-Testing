describe('Motor Selector Admin Console', () => {

  beforeEach(() => {
    cy.visit('https://ipaas.minutuscloud.com/dev/cg_test/');
  });

  it('should launch the app successfully and show the main heading', () => {
    cy.get('h1').should('have.text', 'Motor Selector Admin Console');
  });

  it('should have the correct page title', () => {
    cy.title().should('include', 'Motor Selector Admin Console');
  });

  it('should display Product Codes table with headers', () => {
    cy.contains('Product Codes').should('be.visible');
    const headers = [
      'Material Type',
      'Motor Enclosure',
      'Voltage',
      'Frequency',
      'TB Position',
      'Frame',
      'Polarity',
      'Power kW',
      'Conn.',
      'Output Power (HP)',
      'Phase Current (A)',
      'Rated Speed (RPM)',
      'Torque (Nm)',
      'Torque (kgf.m)',
      'Eff. FL',
      'Eff. 3/4FL'
    ];
    headers.forEach(header => {
      cy.contains('th', header).should('be.visible');
    });
  });

  it('should contain 3 rows of product data', () => {
    cy.get('table tbody tr').should('have.length', 3);
  });

  it('should verify first row content (example)', () => {
    cy.get('table tbody tr').eq(0).within(() => {
      cy.contains('td', 'Fabricated');
      cy.contains('td', 'SPDP');
      cy.contains('td', '575');
      cy.contains('td', '60');
      cy.contains('td', 'LEFT');
      cy.contains('td', '0100L');
      cy.contains('td', '2');
      cy.contains('td', '3');
      cy.contains('td', 'Y');
      cy.contains('td', '12');
      cy.contains('td', '1.5');
      cy.contains('td', '2871');
      cy.contains('td', '2.5');
      cy.contains('td', '0.3');
      cy.contains('td', '83.5');
      cy.contains('td', '83.8');
    });
  });

  it('should verify pagination shows correct range and total', () => {
    cy.contains('1-3 of 3').should('exist');
    cy.get('[aria-label="Next page"]').should('be.disabled');
  });

});
