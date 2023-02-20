const inquirer = require('inquirer');
const promptNewTeamMember = require('./prompts/teamQuestions');
let ascii_text_generator = require('ascii-text-generator');
const teamQuestions = require('./prompts/teamQuestions');

const teamMembers = [];

async function startGenerator() {
    let input_text = "Dev Gen";
    let ascii_text = ascii_text_generator(input_text, "2");
    
    console.log(ascii_text);
    console.log('Follow the prompts to make a dev team profile!');

    // inquirer.prompt(teamQuestions);
}

startGenerator()