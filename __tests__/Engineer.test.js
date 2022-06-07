const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Niq', 7, 'email@email.com', 'githubAccount');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('get github account', () => {
    const engineer = new Engineer('Niq', 7, 'email@email.com', 'githubAccount');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('githubAccount'));
});

test('get role', () => {
    const engineer = new Engineer('Niq', 7, 'email@email.com', 'githubAccount');

    expect(engineer.getRole()).toEqual('Engineer');
});