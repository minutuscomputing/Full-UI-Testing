describe('App Launch ', () => {
    it('should launch the app successfully', () => {
        cy.visit('https://ipaas.minutuscloud.com/dev/cg_test/')
        cy.get('h1').should('have.text', 'Motor Selector Admin Console');
    })
})