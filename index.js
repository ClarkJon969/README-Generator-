const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'

  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe your project and its usage'

  },
  {
    type: 'input',
    name: 'table',
    message: 'If necessary add a table of contents'

  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install?'

  },
  {
    type: 'input',
      name: 'usage',
    message: 'How do you use? Include screenshots.'

  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Were there any other contributors?'

  },
  {
    type: 'input',
    name: 'tests',
    message: 'Do you have any tests to run?'

  },
  {
    type: 'input',
    name: 'questions',
    message: 'Were you left with any questions from your project?'

  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use',
    choices: ['MIT', 'Boost']

  }

]

// .then( answers => {
//   console.log(answers.title);
//   console.log(answers.description);
//   console.log(answers.table);
//   console.log(answers.installation);
//   console.log(answers.usage);
//   console.log(answers.contributors);
//   console.log(answers.tests);
//   console.log(answers.questions);



  


function writeToFile(fileName, data) {
  let content = generateMarkdown(data);
  fs.writeFile(fileName, content, function (error) {
      if (error) {
          return console.log(error)
      }
      console.log('success')
  });
}


  function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'answers.md';
        writeToFile(fileName, data)
    })
}


init();



