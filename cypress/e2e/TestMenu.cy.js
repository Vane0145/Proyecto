

import homePage from "../pages/homePage"



describe("Automation Proyect", () => {
    beforeEach(() => {
        cy.intercept('/service-worker.js', {
            body: undefined
        })
        cy.clearAllSessionStorage({ log: true })
        cy.visit('https://www.saucedemo.com')
        cy.fixture("example").as("data")
        cy.typeLogin("standard_user", "secret_sauce")

    })
    context("Menu Section", () => {
        it("All items Option", () => {
            cy.get("#react-burger-menu-btn").click()
            cy.get("#inventory_sidebar_link").click()
            cy.location("pathname").should("eq","/inventory.html")
        })
    
        it.only("About Option", () => {
            cy.get("#react-burger-menu-btn").click()
            cy.get("#about_sidebar_link").click()
            cy.url("https://saucelabs.com/").should("exist")
            cy.origin('https://saucelabs.com/', () => {
                cy.get('#__next').should('contain.text', 'The world relies on your code. Test on thousands of device, browser, and OS configurations – anywhere, any time.') // now succeeds!
              })
        })
        it("Logout Option", () => {
            cy.get("#react-burger-menu-btn").click()
            cy.get("#logout_sidebar_link").click()
            cy.url("https://www.saucedemo.com/").should("exist")
        })
        it 

    })

})
