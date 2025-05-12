class TransactionsHystory{
    selectorsList(){
        const selectors = {
            noTransactionLabel: "h2.MuiTypography-h6.MuiTypography-gutterBottom",
            transactionItem: "[data-test^='transaction-item-']",
            createTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']"
        }
        return selectors
    }

    noTransactionHistory(){
            cy.get(this.selectorsList().noTransactionLabel).contains('No Transactions').should('be.visible')
            cy.get(this.selectorsList().createTransactionButton).should('be.visible')
    }

    TransactionHistory(){
            cy.get(this.selectorsList().transactionItem).should('have.length.greaterThan', 0)
    } 

}

export default TransactionsHystory