
describe('JavaScript Alerts Test', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  it.skip('JS alert()', () => {
    cy.get("button[onclick='jsAlert()']").click();
    cy.on('window:alert',(t)=> {
        expect(t).to.contains('I am a JS Alert')
    })

    cy.get('#result').should('have.text','You successfully clicked an alert');
  });

  it('Confirmation Alert ',() =>{
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=> {
        expect(t).to.contains('I am a JS Confirm')
    })

    cy.get('#result').should('have.text','You clicked: Ok')
  })

    it('Confirmation Alert -cancel',() =>{
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=> {
        expect(t).to.contains('I am a JS Confirm')
    })

    cy.on('window:confirm',()=> false)
    cy.get('#result').should('have.text','You clicked: Cancel')
  })

    it('Prompt Alert ',()=> {
        cy.window().then((t) => {
            cy.stub(t,'prompt').returns('Hey Sayali');
        });

        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text','You entered: Hey Sayali')
    })

    it('Authentication alert ',() =>{
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {username :"admin",password :"admin"}});
        // cy.get('div[class="example"] p').should('have.contain',"Congratulations")

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('div[class="example"] p').should('have.contain',"Congratulations")
    })

});
