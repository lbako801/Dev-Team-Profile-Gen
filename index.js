const inquirer = require("inquirer");
const ascii_text_generator = require("ascii-text-generator");
const Manager = require("./models/Manager");
const Engineer = require("./models/Engineer");
const Intern = require("./models/Intern");
const Employee = require("./models/Employee");
const Other = require("./models/Other");
const teamQuestions = require("./prompts/teamQuestions");
const CardGenerator = require("./src/cardGenerator");
const generator = new CardGenerator();
const fs = require("fs");

async function startGenerator() {
  let input_text = "TEAM Gen";
  let ascii_text = ascii_text_generator(input_text, "2");

  console.log(ascii_text);
  console.log('');
  console.log("Follow the prompts to make a dev team profile!");
  console.log('');

  const answers = await inquirer.prompt({
    type: "number",
    name: "teamSize",
    message:
      "How many team members do you have (including yourself)? Enter Manager details first!",
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
            answers.githubProfile
          )
        );
        break;
      case "Intern":
        teamMembers.push(
          new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.githubProfile,
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
            answers.githubProfile,
            answers.custom
          )
        );
        break;
      default:
        break;
    }
  }
  // Generate HTML code for all team members
  const teamMemberHTML = teamMembers
    .map((member) => {
      switch (member.getRole()) {
        case "Manager":
          return generator.managerCard(member);
        case "Engineer":
          return generator.engineerCard(member);
        case "Intern":
          return generator.internCard(member);
        case "Other":
          return generator.customCard(member);
        default:
          break;
      }
    })
    .join("");

  // Read the contents of index.html
  const indexHTML = await fs.promises.readFile("./index.html", "utf-8");

  // Find the index of the make-team body tag
  const teamContainerIndex = indexHTML.indexOf('<body class="make-team">');

  // Insert the generated HTML after the opening body tag
  const updatedHTML =
    indexHTML.slice(0, teamContainerIndex + '<body class="make-team">'.length) +
    teamMemberHTML +
    indexHTML.slice(teamContainerIndex + '<body class="make-team">'.length);

  // Write the updated HTML to the index.html file
  await fs.promises.writeFile("./index.html", updatedHTML);
  console.log('');
  console.log('');
  console.log("Webpage for the team has been made! Check it out!");
}

startGenerator();