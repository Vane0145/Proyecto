describe("Automation Proyect", () => {
    beforeEach(() => {
        cy.intercept('/service-worker.js', {
            body: undefined
        })
        cy.clearAllSessionStorage({ log: true })
        cy.visit('https://www.saucedemo.com')
        cy.typeLogin("standard_user", "secret_sauce")
        cy.location("pathname").should("eq", "/inventory.html")
    })
    context("CAR SHOPPING", ()=>{
        it("ADD CAR",()=>{
            cy.get("#add-to-cart-sauce-labs-bike-light").click()
            cy.get("#shopping_cart_container").click()
            cy.get(".cart_item").should("contain",1)
        })
        it("REMOVE CAR",()=>{
            cy.get("#add-to-cart-sauce-labs-bike-light").click()
            cy.get("#shopping_cart_container").click()
            cy.get(".cart_item").should("contain",1) 
            cy.get("#remove-sauce-labs-bike-light").click()
            cy.get("#cart_contents_container").should("not.have", "cart_item")
        })
        it("BADGE", ()=>{
            cy.get("#add-to-cart-sauce-labs-bike-light").click()
            cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
            cy.get(".shopping_cart_badge").should("contain", 2)
        })

    })
})