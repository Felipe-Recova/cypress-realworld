import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'
const loginPage= new LoginPage()
const homePage= new HomePage()

describe('Login', () => {
  it('Login success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.validateUsername(userData.userSuccess.usernameLabel)
  })

  it('Login fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userNameFail.username, userData.userPasswordFail.password)
    loginPage.checkLoginInvalid()
  })
    it('Signup', () => {
    loginPage.accessLoginPage()
    loginPage.signupUser(userData.signup.firstName, userData.signup.lastName, userData.signup.username, userData.signup.password, userData.signup.password)
  })
    it('Signup Field Validations', () => {
    loginPage.accessLoginPage()
    loginPage.signupFieldValidations()
  })
})