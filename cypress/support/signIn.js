export const signIn = () => {
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
            console.log('onSuccess')
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
}


    export const gapiConfig = {
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
            console.log('onSuccess')
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
