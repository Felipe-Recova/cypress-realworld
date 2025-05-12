class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField: "#username",
            passwordField: "#password",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[class='MuiAlert-message css-1pxa9xg-MuiAlert-message']",
            signUp: "[data-test='signup']",
            signupFirstName: "#firstName",
            signupLastName: "#lastName",
            signupUsername: "#username",
            signupPassword: "#password",
            signupConfirmPassword: "#confirmPassword",
            signupButton: "[type='submit']",
            signInLabel: ".MuiTypography-h5",
            firstNameHelper: "#firstName-helper-text",
            lastNameHelper: "#lastName-helper-text",
            usernameHelper: "#username-helper-text",
            passwordHelper: "#password-helper-text",
            confirmPasswordHelper: "#confirmPassword-helper-text",
            
        }
        return selectors
    }

    accessLoginPage(){
            cy.clearCookies();
            cy.clearLocalStorage();
            indexedDB.databases().then((dbs) => {
                dbs.forEach((db) => indexedDB.deleteDatabase(db.name))
            })
            cy.visit('http://localhost:3000/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    checkLoginInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert).should("be.visible", "Username or password is invalid")
    }
    signupUser(firstname, lastname, username, password) {
        cy.get(this.selectorsList().signUp).click()
        cy.get(this.selectorsList().signupFirstName).type(firstname)
        cy.get(this.selectorsList().signupLastName).type(lastname)
        cy.get(this.selectorsList().signupUsername).type(username)
        cy.get(this.selectorsList().signupPassword).type(password)
        cy.get(this.selectorsList().signupConfirmPassword).type(password)
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().signInLabel).should("contain", "Sign in").should("be.visible")
    }
    signupFieldValidations() {
        cy.get(this.selectorsList().signUp).click()
        cy.get(this.selectorsList().signupFirstName).click()
        cy.get(this.selectorsList().signupLastName).click()
        cy.get(this.selectorsList().signupUsername).click()
        cy.get(this.selectorsList().signupPassword).click()
        cy.get(this.selectorsList().signupConfirmPassword).click()
        cy.get(this.selectorsList().signupFirstName).click()
        cy.get(this.selectorsList().firstNameHelper).should("contain", "First Name is required").should("be.visible")
        cy.get(this.selectorsList().lastNameHelper).should("contain", "Last Name is required").should("be.visible")
        cy.get(this.selectorsList().passwordHelper).should("contain", "Enter your password").should("be.visible")
        cy.get(this.selectorsList().confirmPasswordHelper).should("contain", "Confirm your password").should("be.visible")
        cy.get(this.selectorsList().signupPassword).type("12")
        cy.get(this.selectorsList().passwordHelper).should("contain", "Password must contain at least 4 characters").should("be.visible")
        cy.get(this.selectorsList().signupPassword).type("1234")
        cy.get(this.selectorsList().signupConfirmPassword).type("12")
        cy.get(this.selectorsList().confirmPasswordHelper).should("contain", "Password does not match").should("be.visible")
    }
}

export default LoginPage