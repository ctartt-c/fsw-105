const employees = []

function Employee(name, jobTitle, salary, status = 'Full Time'){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Job Title: ${jobTitle}, Salary: ${salary}, Status: ${status}`);
    }
}
let firstEmployee = new Employee('Carlton tartt Jr.', 'Software Engineer', 90000, 'Contract');
let secondEmployee = new Employee('Lisa Tartt.', 'Medical Billing Specialist', 40000, 'Contract');
let thirdEmployee = new Employee('Carrett Tartt.', 'Data Analyst', 75000, 'Part-Time');

employees.push(firstEmployee);
employees.push(secondEmployee);
employees.push(thirdEmployee);
console.log(employees);