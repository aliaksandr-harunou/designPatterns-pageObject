const BasePage = require("../../../basePage/basePage");
const Element = require("../../../baseElements/baseElement");
const EC = protractor.ExpectedConditions;

class MicrosoftLoginPage extends BasePage {
  constructor() {
    super();
    this.yesButton = new Element("Yes", "CSS", "#idSIButton9");
    this.noButton = new Element("No", "CSS", "#idBtn_Back");
  };
  async clickYes() {
    await browser.wait(EC.elementToBeClickable(this.yesButton.element), 10000);
    await this.yesButton.click();
  }
  async clickNo() {
    await browser.wait(EC.elementToBeClickable(this.noButton.element), 10000);
    await this.noButton.click();
  };
};

module.exports = MicrosoftLoginPage;