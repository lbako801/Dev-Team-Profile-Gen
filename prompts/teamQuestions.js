const teamQuestions = [
    {
        type: 'number',
        name: 'teamSize',
        message: 'How many team members do you have (including yourself)?',
        validate: (input) => {
            if (input <= 0) {
                return 'Please enter a number greater than 0';
            } else if (input > 8) {
                return 'The maximum team size is 8 members';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'role',
        message: `Select the role for team member:`,
        choices: ['Manager', 'Engineer', 'Intern', 'Other'],
    },
    {
        type: 'input',
        name: 'name',
        message: `Enter the name for the team member:`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the email for the team member:`,
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: `Enter the GitHub username for the team member:`,
        when: (answers) => answers.role !== 'Manager',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `Enter the office number for the manager:`,
        when: (answers) => answers.role === 'Manager',
    },
    {
        type: 'input',
        name: 'githubProfile',
        message: `Enter the GitHub profile for the engineer:`,
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: `Enter the school for the intern:`,
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'input',
        name: 'role',
        message: `Enter the role for team member:`,
        when: (answers) => answers.role === 'Other',
    },
];

module.exports = teamQuestions;