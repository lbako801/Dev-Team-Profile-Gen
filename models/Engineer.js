const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, id, githubProfile) {
      super(name, email, id);
        this.githubProfile = githubProfile;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;