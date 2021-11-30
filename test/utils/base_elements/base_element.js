const logger = require('../../../test/config/logger.config.js');

class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };
    async type(text) {
        logger.info(`Typing "${text}" into "${this.elementName}"`);
        return await this.element.sendKeys(text);
    };
    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
};

module.exports = Element;