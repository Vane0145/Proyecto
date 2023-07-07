
import homePage from "../pages/homePage"

describe("Automation Proyect", () => {
  beforeEach(() => {
    cy.intercept('/service-worker.js', {
      body: undefined
    })
    cy.clearAllSessionStorage({ log: true })
    cy.visit('https://www.saucedemo.com')
    cy.fixture("example").as("data")
  
  })

  context("Login Section", () => {
    it("Login incorrecto con Usuario o contraseña vacíos", () => {
      cy.get("@data").then((data) => {
        homePage.TypeEmailInput(data.emptyEmail)
        cy.getByData("login-button").click()
        homePage.TypePasswordInput(data.Password)
        cy.getByData("error").should("contain.text","Epic sadface: Username is required")
        console.log(data.Password)
        console.log(data.emptyEmail)

      })

    })

    it("Login incorrecto con password incorrecto", () => {
      cy.get("@data").then((data) => {
        homePage.TypeEmail(data.email)
        homePage.TypePasswordInput(data.WrongPassword)
        cy.getByData("login-button").click()
        cy.getByData("error").should("contain.text","Epic sadface: Username and password do not match any user in this service" )
      })
      
    })

    it("Login exitoso ", () => {
      cy.get("@data").then((data) => {
        homePage.TypeEmail(data.email)
        homePage.TypePasswordInput(data.Password)
        cy.getByData("login-button").click()
        cy.location("pathname").should("eq","/inventory.html")
      })
    })
    
    
  })


})





