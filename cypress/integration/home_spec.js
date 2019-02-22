describe('Logging in', () => {
  describe('when a user is not signed in', () => {
    it('prompts google log in', () => {
      cy.visit('/')
      cy.get('#google-sign-in-button').should('exist')
    })
  })

  describe('when a user is signed in', () => {
    const user = {
      name: "Amanda Beiner",
      email: "amanda@privy.com",
      photo: "myphotourl"
    }

    beforeEach(() => {
      cy.window().then((win) => {
        win.gapiTest = {
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
                        return "Patrick"
                      },
                      getEmail() {
                        "jeff@crack.com"
                      },
                      getImageUrl() {
                        "picture"
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


    it('should bring them to the home page', () => {
      cy.url().should('include', '/home')
    })
  })
})
