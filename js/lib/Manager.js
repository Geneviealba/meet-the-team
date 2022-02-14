// const Manager = require("../Manager");
const Employee = require("./Employee");


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }
    gitRole() {
        return "Manager";
    }
    getOfficeNumber() {
    return this.officeNumber

    }
}
module.exports = Manager;