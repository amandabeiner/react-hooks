import { signIn } from '../support/signIn'

describe('adding a post', () => {
  let polyfill

  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'
    cy.request(polyfillUrl)
      .then((response) => {
        polyfill = response.body
      })
  })

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        delete win.fetch
        win.eval(polyfill)
        win.fetch = win.unfetch
      }
    })
    cy.server()
    cy.route('POST', '/posts', 'fixture:post').as('postPostSuccess')
    cy.route('GET', '/posts', 'fixture:posts').as('fetchPostsSuccess')
    cy.route('POST', '/auth', 'fixture:user').as('userSuccess')
    signIn()
  })

  it('displays the post at the top of the feed', () => {
    cy.window().then(win => { console.log("GAPI", win.gapi) })
    cy.get('input[name="title"]').type('some other stuff docs')
    cy.get('input[name="link"]').type('redux.org')
    cy.get('textarea[name="description"]').type('Learn Redux by reading the docs')
    cy.get('.select-picker input').type('r', { force: true })
    cy.get('div').contains('react').click({ force: true })
    cy.get('form').submit()
  })
})
