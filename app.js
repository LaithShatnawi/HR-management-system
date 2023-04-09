'use strict'
let employees = [];
let netSalary = [];
function Employee(employeeId, fullName, department, level, image) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    employees.push(this);
    netSalary.push(this);
};


Employee.prototype.calcSalary = function () {
    let salaryJunior = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    let salaryMidSenior = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    let salarySenior = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    let juniorNetSalary = salaryJunior - (salaryJunior * 0.075);
    let midSeniorNetSalary = salaryMidSenior - (salaryMidSenior * 0.075);
    let seniorNetSalary = salarySenior - (salarySenior * 0.075);
    if(this.level ==='Senior'){
    document.write(`The net salary for ${this.fullName} is : ${seniorNetSalary}`)
}
else if (this.level === 'Mid-Senior'){
    document.write(`The net salary for ${this.fullName} is : ${midSeniorNetSalary}`)
}
else {
    document.write(`The net salary for ${this.fullName} is : ${juniorNetSalary}`)
}
};

Employee.prototype.render = function () {
    document.write(`<h2>Employee ID :</h2> ${this.employeeId} `);
    document.write(`<h2>Employee Name :</h2> ${this.fullName} `);
    document.write(`<h2>Department :</h2> ${this.department} `);
    document.write(`<h2>Level :</h2> ${this.level} `);
    document.write(`<h2>Image :</h2> <img src = "${this.image}" alt="">`);
};
let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets./employee1.jpg');
let employee2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assets./employee2.jpg');
let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets./employee3.jpeg');
let employee4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assets./employee4.jpg');
let employee5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assets./employee5.jpg');
let employee6 = new Employee(1005, 'Rana Saleh', 'Development	', 'Junior', './assets./employee6.jpg');
let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance	', 'Mid-Senior', './assets./employee7.jpg');

for (let i = 0; i < employees.length; i++) {
    employees[i].render();
}
for (let i = 0; i < employees.length; i++) {
    netSalary[i].calcSalary();
}