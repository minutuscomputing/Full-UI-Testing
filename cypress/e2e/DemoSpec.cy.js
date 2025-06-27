describe('App Launch ', () => {
    it('should launch the app successfully', () => {
        cy.visit('https://ipaas.minutuscloud.com/dev/cg_test/')
        cy.get('h1').should('have.text', 'Motor Selector Admin Console');
    })
    //     it('launching failed', () => {
    //     cy.visit('https://ipaas.minutuscloud.com/dev/cg_test/')
    //     cy.get('h1').should('have.text', 'Motor Selector Admin Panel');
    // })

    it('should display the correct title', () => {
        cy.visit('https://ipaas.minutuscloud.com/dev/cg_test/')
        cy.title().should('include', 'Motor Selector Admin Console');
    })
})