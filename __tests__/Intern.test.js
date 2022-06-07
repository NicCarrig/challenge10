const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Niq', 7, 'email@email.com', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get school', () => {
    const intern = new Intern('Niq', 7, 'email@email.com', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining('school'));
})

test('get role', () => {
    const intern = new Intern('Niq', 7, 'email@email.com', 'school');

    expect(intern.getRole()).toEqual('Intern');
})