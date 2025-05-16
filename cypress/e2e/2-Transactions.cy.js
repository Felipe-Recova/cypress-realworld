import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'
import TransactionsPage from '../pages/transactionPage.js'
const loginPage= new LoginPage()
const homePage= new HomePage()
const transactionsPage= new TransactionsPage()

describe('Transactions', () => {
  it('Pay Transaction', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.validateUsername(userData.userSuccess.usernameLabel)
    homePage.newTransaction()
    transactionsPage.searchBankUser(userData.bankUsers.bankUser1)
    transactionsPage.fillTransactionPayment(userData.bankUsers.bankUser1)
    transactionsPage.confirmTransactionPayment(userData.bankUsers.bankUser1)
  })
  it('Request Transaction', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.validateUsername(userData.userSuccess.usernameLabel)
    homePage.newTransaction()
    transactionsPage.searchBankUser(userData.bankUsers.bankUser2)
    transactionsPage.fillTransactionRequest(userData.bankUsers.bankUser2)
    transactionsPage.confirmTransactionRequest(userData.bankUsers.bankUser2)
  })
  it.only('Pay Transaction with validation of insufficient balance', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.validateUsername(userData.userSuccess.usernameLabel)
    homePage.newTransaction()
    transactionsPage.searchBankUser(userData.bankUsers.bankUser1)
    transactionsPage.validateInsufficientFundsMessage()
})

})