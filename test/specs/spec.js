const expect = require("chai").expect;
const PageFactory = require("../utils/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await PageFactory.getPage("Login").open();
        await PageFactory.getPage("Login").typeLogin();
        await PageFactory.getPage("Login").typePassword();
        await PageFactory.getPage("Login").clickSignIn();
        await PageFactory.getPage("Login").clickSendMePush();
        await PageFactory.getPage("MicrosoftLogin").clickYes();
        const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(0);
        await browser.wait(EC.visibilityOf(firstNavigationButton), 30000);
        await PageFactory.getPage("Home").Header.navigationButtons.clickElementByText("My Profile");
        const firstRecentBadge = PageFactory.getPage("MyProfile").recentBadgesSection.collection.get(0);
        await browser.wait(EC.visibilityOf(firstRecentBadge), 5000);
        const countOfRecentBadges = await PageFactory.getPage("MyProfile").recentBadgesSection.getCount();
        expect(countOfRecentBadges).to.be.equal(11);
    });
});