const expect = require("chai").expect;
const PageFactory = require("../utils/pageFactory");
const loginPage = PageFactory.getPage("Login");
const microsoftPage = PageFactory.getPage("MicrosoftLogin");
const homePage = PageFactory.getPage("Home");
const myProfilePage = PageFactory.getPage("MyProfile");
const open = require("../utils/helpers/functions").open;
const EC = protractor.ExpectedConditions;
describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        await loginPage.typeLogin();
        await loginPage.typePassword();
        await loginPage.clickSignIn();
        await loginPage.clickSendMePush();
        await microsoftPage.clickYes();
        const firstNavigationButton = homePage.Header.navigationButtons.collection.get(0);
        await browser.wait(EC.visibilityOf(firstNavigationButton), 30000);
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        const firstRecentBadge = myProfilePage.recentBadgesSection.collection.get(0);
        await browser.wait(EC.visibilityOf(firstRecentBadge), 5000);
        const countOfRecentBadges = await myProfilePage.recentBadgesSection.getCount();
        expect(countOfRecentBadges).to.be.equal(11);
    });
});