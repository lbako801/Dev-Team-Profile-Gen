const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, id, type, githubProfile) {
      super(name, email, id);
        this.githubProfile = githubProfile;
        this.type = type;
    }
}

module.exports = Engineer;