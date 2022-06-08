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
        message: 'ID Number: ',
        validate: (idInput) => {
            if( typeof(parseInt(idInput)) === 'number' && (parseFloat(idInput) % 1) === 0){
                return true;
            }
            else{
                console.log("Please enter a valid ID number");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: ',
        validate: (emailInput) => {
            if(emailInput.includes("@")){
                return true;
            }
            else{
                console.log("Please enter a valid email adress");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'github',
        message: 'Github Username: ',
        validate: (githubInput) => {
            if(githubInput){
                return true;
            }
            else {
                console.log("Please enter the engineer's github account name");
                return false;
            }
        }
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        // console.log(answers);
        let {name, id, email, github} = answers;
        id = parseInt(id);
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        // console.log(teamArray);
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
        message: 'ID Number: ',
        validate: (idInput) => {
            if( typeof(parseInt(idInput)) === 'number' && (parseFloat(idInput) % 1) === 0){
                return true;
            }
            else{
                console.log("Please enter a valid ID number");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: ',
        validate: (emailInput) => {
            if(emailInput.includes("@")){
                return true;
            }
            else{
                console.log("Please enter a valid email adress");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'school',
        message: 'School: ',
        validate: (schoolInput) => {
            if(schoolInput){
                return true;
            }
            else {
                console.log("Please enter the intern's school")
                return false;
            }
        }
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        // console.log(answers);
        let {name, id, email, school} = answers;
        id = parseInt(id);
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        // console.log(teamArray);
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
        message: 'ID Number: ',
        validate: (idInput) => {
            if( typeof(parseInt(idInput)) === 'number' && (parseFloat(idInput) % 1) === 0){
                return true;
            }
            else{
                console.log("Please enter a valid ID number");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email: ',
        validate: (emailInput) => {
            if(emailInput.includes("@")){
                return true;
            }
            else{
                console.log("Please enter a valid email adress");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Office Number: ',
        validate: (officeInput) => {
            if( typeof(parseInt(officeInput)) === 'number' && (parseFloat(officeInput) % 1) === 0){
                return true;
            }
            else{
                console.log("Please enter the manager's office number");
                return false;
            }
        }
    }];
    inquirer.prompt(questions)
    .then((answers) => {
        // console.log(answers);
        let {name, id, email, officeNumber} = answers;
        id = parseInt(id);
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        // console.log(teamArray);
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
            let htmlString = GenerateHTML(teamArray);
            fs.writeFile('./dist/index.html', htmlString, err => {
                err ? console.log(err) : console.log('Team page HTML sucessfully created')
            })
        }
    })
}


addEmployee();