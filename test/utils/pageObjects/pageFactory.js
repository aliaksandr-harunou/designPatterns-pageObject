const HomePage = require("./homePage/homePage");
const MyProfilePage = require("./myProfilePage/myProfilePage");
const LoginPage = require("./loginPage/loginPage");
const MicrosoftLoginPage = require("./loginPage/micrLoginPage");
const BasePage = require("./basePage/basePage");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();  
            case "Login":
                return new LoginPage();     
            case "MicrosoftLogin":
                return new MicrosoftLoginPage();  
            case "MyProfile":
                return new MyProfilePage();      
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;