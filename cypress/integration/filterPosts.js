describe('filtering posts in the feed', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.logIn()

    cy.server()
    cy.route('GET', '/posts', 'fixture:posts').as('fetchPostsSuccess')
  })

  describe('when a user clicks on a filter', () => {
    it('only shows posts that match that filter', () => {
      cy.getSelector('tag').contains('rails').first().click()
      cy.getSelector('post-tile').should('have.length', 1)
    })
  })

  describe('when a user clicks to clear all filters', () => {
    it('shows all unfiltered posts', () => {
      cy.getSelector('tag').contains('rails').first().click()
      cy.getSelector('clear-btn').click()

      cy.getSelector('post-tile').should('have.length', 2)
    })
  })
})
