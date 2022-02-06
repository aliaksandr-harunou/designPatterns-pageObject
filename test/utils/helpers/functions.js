const logger = require('../../../test/config/logger.config.js');


async function getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();
    logger.debug(`Current url is "${currentUrl}"`);
    return currentUrl;
};

function wait(seconds) {
    logger.info(`Waiting "${seconds * 1000}" milliseconds`);
    return browser.sleep(seconds * 1000);
};

async function open(url) {
    logger.info(`Opening "${url}" url`);
    await browser.get(url);
}

module.exports = {getCurrenUrl, wait, open};