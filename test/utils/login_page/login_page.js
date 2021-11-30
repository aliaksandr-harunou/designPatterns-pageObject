const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require('../../../test/config/logger.config.js');
const creds = require('./credentials');
const EC = protractor.ExpectedConditions;

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = "https://heroes.epam.com/";
    this.loginField = new Element("Login field", "#userNameInput");
    this.passwordField = new Element("Password field", "#passwordInput");
    this.signInButton = new Element("Sign In button", "#submitButton");
    this.iFrame = new Element("iFrame", "#duo_iframe");
    this.pushButton = new Element("Send Me a Push", "[type='submit']");
  };
  open() {
    return super.open(this.url);
  };
  clickSignIn() {
    return this.signInButton.click();
  };
  async clickSendMePush() {
    await browser.wait(EC.visibilityOf(this.iFrame.element), 10000);
    await browser.switchTo().frame(0);
    await browser.wait(EC.elementToBeClickable(this.pushButton.element), 10000);
    return this.pushButton.click();
  };
  typeLogin() {
    return this.loginField.type(creds.login);
  };
  typePassword() {
    return this.passwordField.type(creds.password);
  };
};

module.exports = LoginPage;