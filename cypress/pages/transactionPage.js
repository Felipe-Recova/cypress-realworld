class TransactionsPage{
    selectorsList(){
        const selectors = {
            searchField: "#user-list-search-input",
            searchedUser: "[data-test^='user-list-item-']",
            amountField: "#amount",
            descriptionNoteField: "#transaction-create-description-input",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            userBalance: "[data-test='sidenav-user-balance']",
            amountErrorMessage: "#transaction-create-amount-input-helper-text"

        }
        return selectors
    }

    searchBankUser(bankUser){
            cy.get(this.selectorsList().searchField).scrollIntoView().should('be.visible').type(bankUser, { force: true })
            cy.get(this.selectorsList().searchedUser).contains('span', bankUser).should("be.visible").click()
    }

    fillTransactionPayment(bankUser){
            cy.get(this.selectorsList().amountField).type("10")
            cy.get(this.selectorsList().descriptionNoteField).type("teste pagamento para "+ bankUser)            
    }

    fillTransactionRequest(bankUser){
            cy.get(this.selectorsList().amountField).type("20")
            cy.get(this.selectorsList().descriptionNoteField).type("teste requisição de pagamento para "+ bankUser)            
    }

    confirmTransactionPayment(bankUser){
            cy.get(this.selectorsList().payButton).click()
            cy.get('h2.MuiTypography-root').should('be.visible').and('contain', `Paid $10.00 for teste pagamento para ${bankUser}`)
    }

    confirmTransactionRequest(bankUser){
            cy.get(this.selectorsList().requestButton).click()
            cy.get('h2.MuiTypography-root').should('be.visible').and('contain', `Requested $20.00 for teste requisição de pagamento para ${bankUser}`)
    }

    validateUsername(usernameLabel){
            cy.get(this.selectorsList().usernameLabel).should("contain", usernameLabel).should("be.visible")
    }

    validateInsufficientFundsMessage() {
        cy.get(this.selectorsList().userBalance)
          .invoke('text')
          .then((balanceText) => {
        const numericBalance = parseFloat(balanceText.replace(/[$,]/g, ''))
        const invalidAmount = (numericBalance + 10).toFixed(2) 

        cy.get(this.selectorsList().amountField).clear().type(invalidAmount)
        cy.get(this.selectorsList().descriptionNoteField).clear().type(`Teste com valor acima do saldo ($${invalidAmount})`)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().amountErrorMessage).should('be.visible').and('contain', 'The amount to be paid must be less than your balance')
    })
}


}

export default TransactionsPage