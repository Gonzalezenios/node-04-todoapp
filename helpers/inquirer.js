const inquirer = require("inquirer");
require("colors");

const inquirerMenu = async () => {
  console.log("========================".blue);
  console.log("Select  option".yellow);
  console.log("========================".blue);

  const menu = [{
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [{
        value: 1,
        name: `${"1-".magenta} Create Task`,
      },
      {
        value: 2,
        name: `${"2-".magenta} Get Task`,
      },
      {
        value: 3,
        name: `${"3-".magenta} Complete Task`,
      },
      {
        value: 4,
        name: `${"4-".magenta} Delete Task`,
      },
      {
        value: 0,
        name: `${"0-".magenta} Exit`,
      },
    ],
  }, ];

  const {
    option
  } = await inquirer.prompt(menu);

  return option;
};

const inquirerInput = async (message) => {
  const question = [{
    type: "input",
    name: "description",
    message,
  }, ];

  const {
    description
  } = await inquirer.prompt(question);

  return description;
};

const inquirerSubMenu = async (choices, action) => {
  console.log("===============================".america);
  console.log("Select a task".white);
  console.log("===============================".america);


  const menu = [{
    type: "List",
    name: "option",
    message: `Select task to ${action}`,
    choices,
  }, ];

  const {
    option
  } = await inquirer.prompt(menu);

  return option;

};

module.exports = {
  inquirerMenu,
  inquirerInput,
  inquirerSubMenu,
};