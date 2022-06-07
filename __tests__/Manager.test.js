const Manager = require('../lib/Manger');

test('create an manager object', () => {
    const manager = new Manager('Niq', 7, 'email@email.com', 69);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get office number', () => {
    const manager = new Manager('Niq', 7, 'email@email.com', 69);

    expect(manager.getOfficeNumber()).toEqual(69);
});

test('get role', () => {
    const manager = new Manager('Niq', 7, 'email@email.com', 69);

    expect(manager.getRole()).toEqual('Manager');
});