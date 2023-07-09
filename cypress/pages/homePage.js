class homePage{

    elements ={
        EmailInput : () => cy.getByData("username"),
        PasswordInput :() => cy.getByData("password"),
        LoginBtn :() => cy.getByData("login-button"),
        ErrorMessage :() => cy.getByData("error"),
        
         
    }
    TypeEmailInput(){
        this.elements.EmailInput()
    }
    TypePasswordInput(password){
        this.elements.PasswordInput().type(password)
    }
    clickLoginBtn(){
        this.elements.LoginBtn().click()
    }
    AlertMessage(){
        this.elements.AlertMessage()
    }
    TypeEmail(email){
        this.elements.EmailInput().type(email)
    }

}

module.exports = new homePage();