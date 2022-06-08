const fs = require('fs')

const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manger');

function generateHTML(teamData){
    console.log("Generate HTML called");
    console.log(teamData);

    let cards = '';
    for(let i = 0; i < teamData.length; i++){
        cards += cardHandler(teamData[i]);
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
    <body>
        <header class="text-center">
            <h1>My Team</h1>
        </header>
        
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-card">
                    ${cards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

function cardHandler(employee){
    let htmlString = '';
    switch(employee.getRole()){
        case 'Engineer':
            htmlString = generateEngineer(employee);
            break;
        case 'Intern':
            htmlString = generateIntern(employee);
            break;
        case 'Manager':
            htmlString = generateManager(employee);
            break;
        default:
            console.log("Error generating HTML card");
    }
    return htmlString;
}
function generateEngineer(employee){
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${employee.getName()}</h3>
                    <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                    <p id="id">ID: ${employee.getID()}</p>
                    <p id="email">Email: ${employee.getEmail()}</p>
                    <p id="github">Github: ${employee.getGithub()}</p>
                </div>
            </div>
        </div>
    `;
}

function generateIntern(employee){
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${employee.getName()}</h3>
                    <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                    <p id="id">ID: ${employee.getID()}</p>
                    <p id="email">Email: ${employee.getEmail()}</p>
                    <p id="school">School: ${employee.getSchool()}</p>
                </div>
            </div>
        </div>
    `;
}

function generateManager(employee){
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${employee.getName()}</h3>
                    <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                    <p id="id">ID: ${employee.getID()}</p>
                    <p id="email">Email: ${employee.getEmail()}</p>
                    <p id="office">Office Number: ${employee.getOfficeNumber()}</p>
                </div>
            </div>
        </div>
    `;
}

module.exports = generateHTML;