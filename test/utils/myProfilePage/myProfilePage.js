const BasePage = require("../basePage/basePage");
const Collection = require("../baseElements/baseCollection");

class MyProfilePage extends BasePage {
  constructor() {
    super();
    this.recentBadgesSection = new Collection("Recent badges", "CSS", ".RecentBadges_badge__X_jPW");
  };  
};

module.exports = MyProfilePage;