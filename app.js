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

function Employee(employeeId, fullName, department, level, image) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    employees.push(this);
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
    newEmp.calcSalary()
}

Employee.prototype.calcSalary = function () {
    let min;
    let max;
    if (this.level === 'Senior') {
        min = 1500;
        max = 2000;
    }
    else if (this.level === 'Mid-Senior') {
        min = 1000;
        max = 1500;
        console.log('test mid')
    }
    else {
        min = 500;
        max = 1000;
    }
    let salary = Math.floor(Math.random() * (max - min + 1)) + min;
    let salaryTax = salary - salary * 0.075;

    return salaryTax;
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
    empId.textContent = `Employee Id: ${this.employeeId}`;
    card.appendChild(empId);

    let empDepartment1 = document.createElement('h3');
    empDepartment1.classList.add('info');
    empDepartment1.textContent = `Department: ${this.department}`;
    card.appendChild(empDepartment1);


    let empLvl1 = document.createElement('h3');
    empLvl1.classList.add('info');
    empLvl1.textContent = `Level: ${this.level}`;
    card.appendChild(empLvl1);

    let empSalary1 = document.createElement('h3');
    empSalary1.classList.add('info');
    empSalary1.textContent = `Salary: ${this.calcSalary()}`;
    card.appendChild(empSalary1);

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
};

let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets/Ghazi.jpg');
let employee2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assets/Lana.jpg');
let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets/Tamara.jpg');
let employee4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assets/Safi.jpg');
let employee5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assets/Omar.jpg');
let employee6 = new Employee(1005, 'Rana Saleh', 'Development	', 'Junior', './assets/Rana.jpg');
let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance	', 'Mid-Senior', './assets/Hadi.jpg');

for (let i = 0; i < employees.length; i++) {
    employees[i].render();
    employees[i].calcSalary();
}