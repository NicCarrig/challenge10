

class Employee {
    constructor(name, id, role, email){
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Employee;