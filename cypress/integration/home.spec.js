<reference types="cypress" />


describe('JMDB', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should display the home page', () => {
        cy.get('me-2').contains('Login')
    })
})