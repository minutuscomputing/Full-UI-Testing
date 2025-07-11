describe('Motor Selector Admin Console', () => {

  beforeEach(() => {
    cy.visit('https://ipaas.minutuscloud.com/dev/motor_selector_admin_console/');
  });
//Locators
//1.CSSlocators
  it('should launch the app successfully and show the main heading', () => {
    cy.get('h1').should('have.text', 'Motor Selector Admin Console');
  });

  it('upload button should be visible', () => {
    cy.get('.v-btn').should('be.visible');
  });

  it('checkbox should be visible', () => {
    cy.get('input#checkbox-4')
    });

  it('checkbox should be checked', () => {
    cy.get('input#checkbox-4').check().should('be.checked');
  });
    it('checkbox should be unchecked', () => {
        cy.get('input#checkbox-4').uncheck().should('not.be.checked');
    });
//   it('search input should be visible', () => {
//     cy.get('input.v-field__input').should('be.visible');
//   });

  //2.XPathlocators
  it('toolbar should be visible', () => {
    cy.xpath('/html/body/my-app/div/div/div/div[2]/div/div/div/div/div/header/div').should('be.visible');
  });
it('should type input in search ', () => {
  cy.xpath('//*[@id="input-2"]').type('XBHDCE06116BA3H02E', { force: true });
});
it('should remove input from search', () => {
  cy.xpath('//*[@id="input-2"]').clear({ force: true });
});
});