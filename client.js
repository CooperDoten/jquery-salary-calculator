$(document).ready(onReady);
let employees = [];

function onReady() {
    $('#submitButton').on('click', employeeData)
}

function employeeData() {
    console.log('in employeeData');
 
    const newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalary').val(),

    }
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalary').val('');

    employees.push(newEmployee);
    console.log(employees)

    getEmployeeSalary();
}

let employeeSalaries = [];

function getEmployeeSalary() {
    console.log('in employee Salary')
    for (let i=0; i<employees.length; i++){
       let employeeSalary = employees[i].annualSalary;
       employeeSalaries.push(employeeSalary);
    }
}
console.log(employeeSalaries);

