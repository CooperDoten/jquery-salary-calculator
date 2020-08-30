$(document).ready(onReady); // add jquery
let employees = []; // declare employees array to store employee data

function onReady() {
    $('#submitButton').on('click', employeeData); // add submit button to push employees to array
    $(document).on('click', '#removeButton', onRemove); // add remove button to remove td of employees
}

function employeeData() {
    console.log('in employeeData');
    
    const newEmployee = {  //creat newEmployee object
        firstName: $('#firstNameInput').val(), //assigning values to object
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalary').val()
    }
    $('.employeeList').append(`<tr><td>${newEmployee.firstName}</td> 
    <td>${newEmployee.lastName}</td>
    <td>${newEmployee.idNumber}</td> 
    <td>${newEmployee.jobTitle}</td>
    <td>${newEmployee.annualSalary}</td> 
    <td><button id="removeButton">Remove</button></td></tr>`); // append dom with employee data

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalary').val(''); //empty values from form inputs 
    employees.push(newEmployee); //push newEmployee to employees
    console.log(employees) // make sure logic works

    getEmployeeSalary();
}

//function to get/calculate employee salaries 
function getEmployeeSalary() {
    let employeeSalaries = []; 
    console.log('in employee Salary')
    for (let i=0; i<employees.length; i++){
       let employeeSalary = employees[i].annualSalary;
       employeeSalaries.push(employeeSalary); //loop through salaries to get salary push to array
    }
    console.log(employeeSalaries);
    let total = 0;
    for(let i=0; i<employeeSalaries.length; i++){
        (total += Number(employeeSalaries[i]) / 12); //change annual salary to monthly
    }

    $('.totalMonthly').text(`Total Monthly: ${Math.round(total)}`); //round off number( wouldn't do in real situation )
    if(total > 20000){
        $('.totalMonthly').addClass('red'); // if more than 20000/month change background to red
    }
}

function onRemove() {
    let deletedEmployee = $(this).parent().parent().text();
   let index = $(this).parent().parent().index();
   index =-1;
   employees.splice(index, 1);
   console.log('in On remove', deletedEmployee);
   $(this).parent().parent().empty();
   getEmployeeSalary();
}



