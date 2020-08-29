$(document).ready(onReady);
let employees = [];

function onReady() {
    $('#submitButton').on('click', employeeData);
  
}

function employeeData() {
    console.log('in employeeData');
    
    const newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalary').val()
    }
    $('#dataOutput').append(`<td>${newEmployee.firstName}</td> <td>${newEmployee.lastName}</td>
    <td>${newEmployee.idNumber}</td> <td>${newEmployee.jobTitle}</td>
    <td>${newEmployee.annualSalary}</td>`);

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalary').val('');
    employees.push(newEmployee);
    console.log(employees)

    getEmployeeSalary();
}

function getEmployeeSalary() {
    let employeeSalaries = [];
    console.log('in employee Salary')
    for (let i=0; i<employees.length; i++){
       let employeeSalary = employees[i].annualSalary;
       employeeSalaries.push(employeeSalary);
    }
    console.log(employeeSalaries);
    let total = 0;
    for(let i=0; i<employeeSalaries.length; i++){
        total += Number(employeeSalaries[i]);
    }
    $('.totalMonthly').text(`Total Monthly: ${total}`);
   
}




