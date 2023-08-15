const { UserUtil } = require('../../utilities') 

class UserManager {
  static getUser(user) {

    user = UserUtil.transformUserData(user);

    console.log(`getUser:: User's data successfully fetched. userId::${user.id} user:: ${user.email}`);

    return user;
  }
}

module.exports = UserManager;