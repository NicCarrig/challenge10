const Employee = require('../lib/Employee');



test('create an Employee object', () => {
    const employee = new Employee('Niq', 7, 'Engineer', 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('gets name', () => {
    const employee = new Employee('Niq', 7, 'Engineer', 'email@email.com');
});

test('gets id number', () => {
    const employee = new Employee('Niq', 7, 'Engineer', 'email@email.com');
});

test('gets role', () => {
    const employee = new Employee('Niq', 7, 'Engineer', 'email@email.com');
});

test('gets email', () => {
    const employee = new Employee('Niq', 7, 'Engineer', 'email@email.com');
});