const BasePage = require("../basePage/basePage");
const Collection = require("../baseElements/baseCollection");

class HomePage extends BasePage {
    constructor() {
      super();
      this.sections = new Collection("Sections", "CSS", ".Wall_cardWrapper__2qHB6)");
    };
};

module.exports = HomePage;