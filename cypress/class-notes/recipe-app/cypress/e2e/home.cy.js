describe('login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')

        cy.viewport(1200, 1200);
    })
    it('login test', () => {
        cy.login()
    })

})