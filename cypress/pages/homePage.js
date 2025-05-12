class HomePage{
    selectorsList(){
        const selectors = {
            usernameLabel: "[data-test='sidenav-username']",
            sidebarHome: "[data-test='sidenav-home']",
            sidebarMyAccount: "[data-test='sidenav-user-settings']",
            sidebarBankAccounts: "[data-test='sidenav-bankaccounts']",
            sidebarNotifications: "[data-test='sidenav-notifications']",
            sidebarLogout: "[data-test='sidenav-signout']",
            headerButtonNewTransaction: "[data-test='nav-top-new-transaction']",
            mineMenu: "[data-test='nav-personal-tab']"
            
        }
        return selectors
    }

    logout(){
            cy.get(this.selectorsList().sidebarLogout).click()
            cy.get(this.selectorsList().signInLabel).should("contain", "Sign in").should("be.visible")
    }

    newTransaction(){
            cy.get(this.selectorsList().headerButtonNewTransaction).click()
    }

    validateUsername(usernameLabel){
            cy.get(this.selectorsList().usernameLabel).should("contain", usernameLabel).should("be.visible")
    }

    mineAcess() {
            cy.get(this.selectorsList().mineMenu).click()
    }

}

export default HomePage