describe('adding a post', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.logIn()


    // Set up stubs for window.fetch
    cy.server()
    cy.route('POST', '/posts', 'fixture:post').as('postPostSuccess')
    cy.route('GET', '/posts', 'fixture:posts').as('fetchPostsSuccess')
    cy.route('POST', '/auth', 'fixture:user').as('userSuccess')
  })

  it('displays the post at the top of the feed', () => {
    const formInput = {
      title: "Redux Docs",
      link: "redux.org",
      description: "Learn Redux by reading the docs",
      letter: 'r',
      tag: 'react'
    }

    cy.fillInForm(formInput)
    cy.get('form').submit()

    cy.get('[data-testid="post-tile"]').should('have.length', 3)
    cy.get('[data-testid="post-tile"]').first().should('contain', 'Redux Docs')
  })
})
