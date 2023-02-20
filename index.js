const inquirer = require('inquirer');
const fs = require('fs');


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
])