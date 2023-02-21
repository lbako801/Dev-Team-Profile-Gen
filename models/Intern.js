const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, email, id, githubProfile, school) {
      super(name, email, id);
        this.school = school;
        this.githubProfile = githubProfile;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;