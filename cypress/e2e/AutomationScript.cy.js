describe('Automation Test Cases', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  });

  // RADIO BUTTONS
  it('should select each radio button', () => {
    cy.get('input[value="radio1"]').check().should('be.checked');
    cy.get('input[value="radio2"]').check().should('be.checked');
    cy.get('input[value="radio3"]').check().should('be.checked');
  });

  // DROPDOWN
  it('should select each option from dropdown', () => {
    cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
    cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
    cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
  });

  // CHECKBOXES
  it('should check and uncheck checkboxes', () => {
    cy.get('#checkBoxOption1').check().should('be.checked');
    cy.get('#checkBoxOption2').check().should('be.checked');
    cy.get('#checkBoxOption3').check().should('be.checked');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
  });

  // ALERTS
  it('should handle alert and confirm box', () => {
    cy.get('#name').type('Sayali');
    cy.get('#alertbtn').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Sayali');
    });

    cy.get('#confirmbtn').click();
    cy.on('window:confirm', (txt) => {
      expect(txt).to.contains('Sayali');
    });
  });

  // SHOW / HIDE
  it('should hide and show textbox', () => {
    cy.get('#hide-textbox').should('be.visible');
    cy.get('#hide-textbox').type('Hidden Text');
    cy.get('#hide').click();
    cy.get('#hide-textbox').should('not.be.visible');
    cy.get('#show').click();
    cy.get('#hide-textbox').should('be.visible');
  });

  // AUTOCOMPLETE
  it('should select autocomplete suggestion', () => {
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');
  });

  // OPEN WINDOW
  it('should open new window (check href)', () => {
    cy.get('#openwindow').should('have.attr', 'onclick');
  });

  // OPEN TAB
  it('should open tab (check href)', () => {
    cy.get('#opentab').should('have.attr', 'href');
  });

  // MOUSE HOVER
  it('should display mouse hover content', () => {
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'AutomationPractice');
  });

  // WEB TABLE VALIDATION
  it('should validate course price from web table', () => {
    cy.get('table[name="courses"] tbody tr').each(($row, index) => {
      const text = $row.text();
      if (text.includes('WebSecurity Testing for Beginners-QA Knowledge to next level')) {
        cy.wrap($row).contains('25').should('exist');
      }
    });
  });

  // IFRAME
  it('should interact with iframe', () => {
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    cy.iframe().find('h1[class*="pricing-title"]').should('contain.text', 'Mentorship');
  });
});
