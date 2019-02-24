// Mock google api implementation in cypress iframe

Cypress.Commands.add('logIn', () => {
  cy.window().then((win) => {
    win.gapi = {
      load(module, callback) {
        setTimeout(() => {
          callback()
        })
      },
      auth2: {
        init(credentials) {
          return Promise.resolve()
        }
      },
      signin2: {
        render(element, properties) {
          setTimeout(() => {
            properties.onsuccess({
              getBasicProfile() {
                return {
                  getName() { 
                    return "Patrick McLaren"
                  },
                  getEmail() {
                    "patrick@privy.com"
                  },
                  getImageUrl() {
                    "https://res.cloudinary.com/dpuzgzqir/image/upload/v1550589891/Screenshot_from_2019-02-19_10-23-24_wkwqrv.png"
                  }
                }
              }
            })
          })
        }
      }
    }
  })
})

Cypress.Commands.add('getSelector', (selector) => {
  cy.get(`[data-testid="${selector}"]`)
})

Cypress.Commands.add('fillInForm', ({ title, link, description, letter, tag }) => {
  cy.get('input[name="title"]').type(title)
  cy.get('input[name="link"]').type(link)
  cy.get('textarea[name="description"]').type(description)
  cy.get('.select-picker input').type(letter, { force: true })
  cy.get('div').contains(tag).click({ force: true })
})

