


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
    context("Inventory Section", ()=> {
        it("Products Must Exist", ()=> {
            cy.get( ".inventory_item_description").should("exist")
            
        })
        it("BackPack Product", ()=>{
            cy.get("#item_4_img_link").click()
            cy.get("[data-test=add-to-cart-sauce-labs-backpack]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$29.99")
        })
        it("BikeLight Product", ()=>{
            cy.get("#item_0_title_link").click()
            cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$9.99")
        })
        it("tShirt Product", ()=>{
            cy.get("#item_1_title_link").click()
            cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$15.99")
        })
        it("Jacket Product", ()=>{
            cy.get("#item_5_img_link").click()
            cy.get("[data-test=add-to-cart-sauce-labs-fleece-jacket]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$49.99")
        })
        it("Onesie Product", ()=>{
            cy.get("#item_2_img_link").click()
            cy.get("[data-test=add-to-cart-sauce-labs-onesie]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$7.99")
        })
        it("ShirtRed Product", ()=>{
            cy.get("#item_3_title_link").click()
            cy.get("[data-test=add-to-cart-test.allthethings()-t-shirt-(red)]").should("exist")
            cy.get(".inventory_details_price").should("contain", "$15.99")
        })
        it("BOTTON ADD TO CAR", ()=>{
            cy.get("[data-test=add-to-cart-sauce-labs-backpack]").should("be.enabled")
        })

        it.only("Botton BacktoProducst",()=>{
            cy.get("#item_4_img_link").click()
            cy.get("[data-test=back-to-products]").click()
            cy.location("pathname").should("eq", "/inventory.html")
        })
   })

})