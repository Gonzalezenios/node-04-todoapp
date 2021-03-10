const inquirer = require('inquirer');
require('colors');

const menu = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1-'.magenta} Create Task`
            },
            {
                value: 2,
                name: `${'2-'.magenta} Get Task`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.log('========================'.blue);
    console.log('Select  option'.yellow);
    console.log('========================'.blue);

    const { option } = await inquirer.prompt(menu);

    return option;
}

module.exports = {
    inquirerMenu
}