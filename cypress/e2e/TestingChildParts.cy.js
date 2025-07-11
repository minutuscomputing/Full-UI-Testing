describe('Tree Structure - Child Parts Handling', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/windows');
  });

  it('HAndling child part ',()=>{
        cy.get('.example>a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back');
  })

    it('HAndling child part in other way',()=>{
        cy.get('.example>a').then((e)=>{
            const url=e.prop('href');
            cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back');
  })

});
