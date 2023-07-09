

describe("Automation Proyect", () => {
    beforeEach(() => {
        cy.intercept('/service-worker.js', {
            body: undefined
        })
        cy.clearAllSessionStorage({ log: true })
        cy.visit('https://www.saucedemo.com')
        cy.typeLogin("standard_user", "secret_sauce")

    })
    context("Menu Section", () => {
        it("All items Option", () => {
            cy.get("#shopping_cart_container").click()
            cy.get("#react-burger-menu-btn").click()
            cy.get("#inventory_sidebar_link").click()
            cy.location("pathname").should("eq", "/inventory.html")
        })

        it("About Option", () => {
            cy.get("#react-burger-menu-btn").click()
            cy.get("#about_sidebar_link").click()
            cy.url("https://saucelabs.com/").should("exist")
    
            })
            
        it("Logout Option", () => {
                cy.get("#react-burger-menu-btn").click()
                cy.get("#logout_sidebar_link").click()
                cy.url("https://www.saucedemo.com/").should("eq", "https://www.saucedemo.com/")
            })

        it.only("Reset App State Option", () => {
                cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click()
                cy.get("#shopping_cart_container").click()
                cy.get("#react-burger-menu-btn").click()
                cy.get("#reset_sidebar_link").click()
                cy.get("#shopping_cart_container").click()
                cy.get("#shopping_cart_container").its("length").should("eq", 1)
                cy.get("#react-burger-cross-btn").click()
                cy.get("[data-test=continue-shopping]").click()
                cy.location("pathname").should("eq", "/inventory.html")

            })
        it("Shows and Hide Menu", () => {
            cy.get("#react-burger-menu-btn").click()
            cy.get(".bm-item-list").should("exist")
            cy.get("#react-burger-cross-btn").click()
            cy.get(".bm-burger-button").should("exist")

        })

        })

 })

