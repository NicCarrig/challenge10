const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manger');

const GenerateHTML = require('./src/GenerateHTML');

const teamArray = [];

function addEmployee(){
    inquirer.prompt({
        type: 'list',
        message: 'What type of employee would you like to add?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager']
    })
    .then(({role}) => {
        switch(role){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Manager':
                addManager();
                break;
            default:
                console.log('Error setting employee role');
        }
    })
}


function addEngineer(){
    // console.log("Add Engineer Chosen");
    const questions = [
        {
        type: 'text',
        name: 'name',
        message: 'Name: ',
        validate: (nameInput) => {
            if(nameInput){
                return true;
            }
            else {
                console.log("Please enter the employee's name")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'ID Number: '
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: '
    },
    {
        type: 'text',
        name: 'github',
        message: 'Github Username: '
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        //call engineer constructor
    }).then( () => {
        addAnotherEmployee();
    });
}

function addIntern(){
    console.log("Add Intern Chosen");
    const questions = [
        {
        type: 'text',
        name: 'name',
        message: 'Name: '
    },
    {
        type: 'text',
        name: 'id',
        message: 'ID Number: '
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: '
    },
    {
        type: 'text',
        name: 'school',
        message: 'School: '
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        //call intern constructor
    }).then( () => {
        addAnotherEmployee();
    });
}

function addManager(){
    console.log("Add Manager Chosen");
    const questions = [
        {
        type: 'text',
        name: 'name',
        message: 'Name: '
    },
    {
        type: 'text',
        name: 'id',
        message: 'ID Number: '
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: '
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Office Number: '
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        //call manager constructor
    }).then( () => {
        addAnotherEmployee();
    })
}




function addAnotherEmployee(){
    inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'anotherOne',
        default: false
    })
    .then(({anotherOne}) => {
        if(anotherOne){
            addEmployee();
        }
        else{
            GenerateHTML();
        }
    })
}

addEmployee();