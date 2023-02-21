const Employee = require('./Employee')

class Other extends Employee{
    constructor(name, email, id, custom, githubProfile) {
        super(name, email, id);
        this.custom = custom;
        this.githubProfile = githubProfile;
       
    }
    getRole() {
        return this.custom;
      }
}

module.exports = Other;