describe('User authentication', () => {
  describe('when visiting the root path', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    describe('as an unauthenticated user', () => {
      it('prompts google log in', () => {
        cy.get('#google-sign-in-button').should('exist')
      })
    })

    describe('as an authenticated user', () => {
      const user = {
        name: "Amanda Beiner",
        email: "amanda@privy.com",
        photo: "myphotourl"
      }

      beforeEach(() => {
        cy.logIn()
      })
      
      it('should bring them to the home page', () => {
        cy.url().should('include', '/home')
      })
    })
  })
})
