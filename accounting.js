'use strict'

let employees = [];
let body = document.getElementById('body');
function renderTable() {
    let adminCount = 0;
    let marketCount = 0;
    let devCount = 0;
    let financeCount = 0;
    let adminSalary = 0;
    let marketSalary = 0;
    let devSalary = 0;
    let financeSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === 'Administration') {
            adminCount++;
            adminSalary += employees[i].salary;
        } else if (employees[i].department === 'Marketing') {
            marketCount++;
            marketSalary += employees[i].salary;
        } else if (employees[i].department === 'Development') {
            devCount++;
            devSalary += employees[i].salary;
        } else {
            financeCount++;
            financeSalary += employees[i].salary;
        }
    };
    //-------------------------------------------------------------------- Number of Employees ----------------------------------------
    let row1 = document.createElement('tr');
    body.appendChild(row1);
    let numOfEmp = document.createElement('td')
    numOfEmp.textContent = 'Number of employees :';
    row1.appendChild(numOfEmp);
    let empAdmin = document.createElement('td');
    empAdmin.textContent = adminCount;
    row1.appendChild(empAdmin);
    let empMarket = document.createElement('td');
    empMarket.textContent = marketCount;
    row1.appendChild(empMarket);
    let empDev = document.createElement('td');
    empDev.textContent = devCount;
    row1.appendChild(empDev);
    let empFinance = document.createElement('td');
    empFinance.textContent = financeCount;
    row1.appendChild(empFinance);
    //-------------------------------------------------------------------- Average Salary ----------------------------------------
    let row2 = document.createElement('tr');
    body.appendChild(row2);
    let avgSalary = document.createElement('td')
    avgSalary.textContent = 'Average Salary :';
    row2.appendChild(avgSalary);

    let avgAdimn = Math.floor(adminSalary / adminCount)
    let avgMarket = Math.floor(marketSalary / marketCount)
    let avgDev = Math.floor(devSalary / devCount)
    let avgFinance = Math.floor(financeSalary / financeCount)

    let SalaryAdmin = document.createElement('td')
    SalaryAdmin.textContent = avgAdimn;
    row2.appendChild(SalaryAdmin);
    let SalaryMarket = document.createElement('td')
    SalaryMarket.textContent = avgMarket;
    row2.appendChild(SalaryMarket);
    let SalaryDev = document.createElement('td')
    SalaryDev.textContent = avgDev;
    row2.appendChild(SalaryDev);
    let SalaryFinance = document.createElement('td')
    SalaryFinance.textContent = avgFinance;
    row2.appendChild(SalaryFinance);
    //-------------------------------------------------------------------- Total Salary ----------------------------------------
    let row3 = document.createElement('tr');
    body.appendChild(row3);
    let totalSalary = document.createElement('td')
    totalSalary.textContent = 'Total Salary :';
    row3.appendChild(totalSalary);
    let totalSalaryAdmin = document.createElement('td')
    totalSalaryAdmin.textContent = adminSalary;
    row3.appendChild(totalSalaryAdmin);
    let totalSalaryMarket = document.createElement('td')
    totalSalaryMarket.textContent = marketSalary;
    row3.appendChild(totalSalaryMarket);
    let totalSalaryDev = document.createElement('td')
    totalSalaryDev.textContent = devSalary;
    row3.appendChild(totalSalaryDev);
    let totalSalaryFinance = document.createElement('td')
    totalSalaryFinance.textContent = financeSalary;
    row3.appendChild(totalSalaryFinance);
    //-------------------------------------------------------------------- Totals ----------------------------------------
    let totalNumOfEmp = document.createElement('td')
    totalNumOfEmp.textContent = `Total Number of employees: ${adminCount + marketCount + devCount + financeCount}`;
    row1.appendChild(totalNumOfEmp);
    let totalAvgeSalary = document.createElement('td')
    totalAvgeSalary.textContent = `Total average salary: ${avgAdimn+avgMarket+avgDev+avgFinance}`;
    row2.appendChild(totalAvgeSalary);
    let totalSalarys = document.createElement('td')
    totalSalarys.textContent = `Total Number of employees in all departments: ${adminSalary+marketSalary+devSalary+financeSalary}`;
    row3.appendChild(totalSalarys);
}

function getData() {
    let receivedData = localStorage.getItem('Employees');
    let objectData = JSON.parse(receivedData);
    if (objectData != null) {
        employees = objectData;
    }
};
getData();
renderTable();
