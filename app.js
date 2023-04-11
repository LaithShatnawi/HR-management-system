'use strict'

let myForm = document.getElementById('myForm');
let mySection = document.getElementById('mySection');
let adminTitle = document.getElementById('admin');
let marketTitle = document.getElementById('market');
let devTitle = document.getElementById('dev');
let FinanceTitle = document.getElementById('finance');
const adminSection = document.querySelector('.admin-section');
const marketSection = document.querySelector('.market-section');
const devSection = document.querySelector('.dev-section');
const financetSection = document.querySelector('.finance-section');
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

function employeesId() {
    let max = 1000;
    let min = 9999;
    let employeeId1 = Math.floor(Math.random() * (max - min + 1)) + min;
    return employeeId1;
}

myForm.addEventListener('submit', addEmployee);
function addEmployee(event) {
    event.preventDefault();
    let empName = event.target.empName.value;
    let empDepartment = event.target.Department.value;
    let empLvl = event.target.Level.value;
    let empImg = event.target.image.value;
    let newEmp = new Employee(employeesId(), empName, empDepartment, empLvl, empImg);
    newEmp.render();
}

Employee.prototype.render = function () {
    let card = document.createElement('div');
    card.classList.add('card')

    let empImg1 = document.createElement('img');
    empImg1.classList.add('info');
    empImg1.setAttribute('id', 'empImg');
    empImg1.src = this.image;
    card.appendChild(empImg1);

    let empName1 = document.createElement('h3');
    empName1.classList.add('info');
    empName1.textContent = `Employee Name: ${this.fullName}`;
    card.appendChild(empName1);

    let empId = document.createElement('h3');
    empId.classList.add('info');
    empId.textContent = `Employee Id: ${employeesId()}`;
    card.appendChild(empId);

    let empDepartment1 = document.createElement('h3');
    empDepartment1.classList.add('info');
    empDepartment1.textContent = `Department: ${this.department}`;
    card.appendChild(empDepartment1);


    let empLvl1 = document.createElement('h3');
    empLvl1.classList.add('info');
    empLvl1.textContent = `Level: ${this.level}`;
    card.appendChild(empLvl1);

    if (this.department === 'Administration') {
        adminSection.appendChild(card)
        mySection.appendChild(adminSection)
        adminTitle.style.display = 'block'
    } else if (this.department === 'Marketing') {
        marketSection.appendChild(card)
        mySection.appendChild(marketSection)
        marketTitle.style.display = 'block'
    } else if (this.department === 'Development') {
        devSection.appendChild(card)
        mySection.appendChild(devSection)
        devTitle.style.display = 'block'

    } else {
        financetSection.appendChild(card)
        mySection.appendChild(financetSection)
        FinanceTitle.style.display = 'block'
    }





    // document.write(`<h2>Employee ID :</h2> ${this.employeeId} `);
    // document.write(`<h2>Employee Name :</h2> ${this.fullName} `);
    // document.write(`<h2>Department :</h2> ${this.department} `);
    // document.write(`<h2>Level :</h2> ${this.level} `);
    // document.write(`<h2>Image :</h2> <img src = "${this.image}" alt="">`);
};
// let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets./employee1.jpg');
// let employee2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assets./employee2.jpg');
// let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets./employee3.jpeg');
// let employee4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assets./employee4.jpg');
// let employee5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assets./employee5.jpg');
// let employee6 = new Employee(1005, 'Rana Saleh', 'Development	', 'Junior', './assets./employee6.jpg');
// let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance	', 'Mid-Senior', './assets./employee7.jpg');

// for (let i = 0; i < employees.length; i++) {
//     employees[i].render();
// }
// for (let i = 0; i < employees.length; i++) {
//     netSalary[i].calcSalary();
// }