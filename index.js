const inquirer = require("inquirer");
const ascii_text_generator = require("ascii-text-generator");
const Manager = require('./models/Manager');
const Engineer = require('./models/Engineer');
const Intern = require('./models/Intern');
const Employee = require('./models/Employee');
const Other = require('./models/Other');
const teamQuestions = require("./prompts/teamQuestions");

async function startGenerator() {
  let input_text = "TEAM Gen";
  let ascii_text = ascii_text_generator(input_text, "2");

  console.log(ascii_text);
  console.log("Follow the prompts to make a dev team profile!");

  const answers = await inquirer.prompt({
    type: "number",
    name: "teamSize",
    message: "How many team members do you have (including yourself)?",
    validate: (input) => {
      if (input <= 0) {
        return "Please enter a number greater than 0";
      } else if (input > 8) {
        return "The maximum team size is 8 members";
      }
      return true;
    },
  });

  const repeatNum = answers.teamSize;

  // Call inquirer.prompt to ask for team member information
  const teamMembers = [];
  for (let i = 0; i < repeatNum; i++) {
    const answers = await inquirer.prompt(teamQuestions);
    switch (answers.role) {
      case "Manager":
        teamMembers.push(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.department,
            answers.officeNumber
          )
        );
        break;
      case "Engineer":
        teamMembers.push(
          new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.githubUsername,
          )
        );
        break;
      case "Intern":
        teamMembers.push(
          new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.githubUsername,
            answers.school
          )
        );
        break;
      case "Other":
        teamMembers.push(
          new Other(
            answers.name,
            answers.id,
            answers.email,
            answers.githubUsername,
            answers.custom
          )
        );
        break;
      default:
        break;
    }
  }

  // Generate HTML output using the team members array
//   const html = generateHTML(teamMembers);

  // Write the HTML output to a file
//   await writeFileAsync("index.html", html);

  console.log("Webpage for the team has been made! Check it out!");
}

startGenerator();
