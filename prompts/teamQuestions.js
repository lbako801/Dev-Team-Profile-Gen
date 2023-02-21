const teamQuestions = [
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
        name: 'id',
        message: `Enter the ID # for the team member:`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the email for the team member:`,
    },
    {
        type: 'input',
        name: 'department',
        message: `Enter the department for the Manager:`,
        when: (answers) => answers.role === 'Manager',
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
        message: `Enter the GitHub profile for the member:`,
        when: (answers) => answers.role === 'Engineer' || 'Other',
    },
    {
        type: 'input',
        name: 'school',
        message: `Enter the school for the intern:`,
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'input',
        name: 'custom',
        message: `Enter custom role:`,
        when: (answers) => answers.role === 'Other',
    },
];

module.exports = teamQuestions;