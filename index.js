const inquirer = require('inquirer');
const fs = require('fs');

class Employee{
    constructor(name, email, githubUsername) {
      this.name = name;
      this.email = email;
      this.githubUsername = githubUsername;
    }
}

class Manager extends Employee{
    constructor(name, email, githubUsername, officeNumber) {
      super(name, email, githubUsername);
      this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee{
    constructor(name, email, githubUsername, githubProfile) {
      super(name, email, githubUsername);
      this.githubProfile = githubProfile;
    }
}

class Intern extends Employee{
    constructor(name, email, githubUsername, school) {
      super(name, email, githubUsername);
      this.school = school;
    }
}

// Ask the user for the number of team members
inquirer.prompt([
    {
        type: 'number',
        name: 'numTeamMembers',
        message: 'How many team members do you have (including yourself)?',
        validate: (input) => {
            if (input <= 0) {
                return 'Please enter a number greater than 0';
            }
            return true;
        },
    },
]);