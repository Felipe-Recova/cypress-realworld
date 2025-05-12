import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'
import TransactionsPage from '../pages/transactionPage.js'
import TransactionsHistory from '../pages/transactionHistory.js'
const loginPage= new LoginPage()
const homePage= new HomePage()
const transactionsPage= new TransactionsPage()
const transactionsHistory= new TransactionsHistory()

describe('TransactionsHistory', () => {
  it('Transaction History Exibition', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.validateUsername(userData.userSuccess.usernameLabel)
    homePage.mineAcess()
    transactionsHistory.TransactionHistory()
  })
  it('No Transaction History Exibition', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userWithoutTransactions.username, userData.userWithoutTransactions.password)
    homePage.mineAcess()
    transactionsHistory.noTransactionHistory()
  })
})