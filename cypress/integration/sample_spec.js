describe('My First Test', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:8080/');
      
      })
    it('check links',()=>{
        cy
        .get('[class=bt]');
        cy.get('.bt').click()
        cy.wait(2000)
        cy.get('#pr').click()
        cy.wait(2000)
        cy.get('#pr').click()
        cy.wait(1000)
        cy.go('back')
      });
})