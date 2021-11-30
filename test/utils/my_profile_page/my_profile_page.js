const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class MyProfilePage extends BasePage {
  constructor() {
    super();
    this.recentBadgesSection = new Collection("Recent badges", ".RecentBadges_badge__X_jPW");
  };  
};

module.exports = MyProfilePage;