import inquirer from 'inquirer';
class Student {
    static counter = 1000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; //initialize an empty array for courses****
        this.balance = 100;
    }
    // method to enroll a student in a course
    enroll_course(course) {
        this.courses.push(course); //push course name in the empty course array***
    }
    // method to view a student balance
    view_balance() {
        console.log(`Balance for ${this.name} : $${this.balance}`);
    }
    // method for pay tution fee for a student
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} fees paid successfully for ${this.name}`);
    }
    // method for desplay student details
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`NAME: ${this.name}`);
        console.log(`COURSES: ${this.courses}`);
        console.log(`BALANCE: ${this.balance}`);
    }
}
// class for student manage class to manage student
class Student_manager {
    students;
    constructor() {
        // *****student details here****
        this.students = []; //initially empty but when we add student then it saves in this array
    }
    // method to add a student
    add_student(name) {
        let student = new Student(name);
        this.students.push(student); // save new student in the array***
        console.log(`Student: ${name} added successfully. Student ID: ${student.id}`);
    }
    // method for find student*** by student id
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id);
    }
    // method to enroll a student in a course
    enroll_student(student_id, course) {
        let findStudent = this.find_student(student_id);
        if (findStudent) {
            // use inheritence bcoz we use parent class method in our child class
            findStudent.enroll_course(course);
            console.log(`${findStudent.name} enrolled in ${course} course successfully`);
        }
    }
    // method to view a student balance
    view_student_balance(student_id) {
        let findStudent = this.find_student(student_id);
        if (findStudent) {
            findStudent.view_balance();
        }
        else {
            console.log("Student not Found. Please a valid student ID!");
        }
    }
    // method to pay student fees
    pay_student_fees(student_id, amount) {
        let findStudent = this.find_student(student_id);
        if (findStudent) {
            findStudent.pay_fees(amount);
        }
        else {
            console.log("Student not Found. Please a valid student ID!");
        }
    }
    // method to display student status
    show_student_status(student_id) {
        let findStudent = this.find_student(student_id);
        if (findStudent) {
            findStudent.show_status();
        }
    }
}
// main function to run the program
async function main() {
    console.log("Welcome to Student management system - 2024");
    console.log('-'.repeat(50));
    let student_manager = new Student_manager();
    // while loop to keep programm runnning
    while (true) {
        // asking user to choose an options
        let choice = await inquirer.prompt([
            {
                name: 'choice',
                type: 'list',
                message: 'Select',
                choices: [
                    "Add Student",
                    'Enroll Student',
                    'View Student Balance',
                    'Pay Fees',
                    'Show Status',
                    'Exit'
                ]
            }
        ]);
        // using based of user choice
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: 'Enter a student name: '
                    }
                ]);
                student_manager.add_student(name_input.name);
                break;
            case "Enroll Student":
                let enroll_student = await inquirer.prompt([
                    {
                        name: 'student_id',
                        type: 'number',
                        message: "Enter a student ID: "
                    },
                    {
                        name: "Course_name",
                        type: "input",
                        message: "Enter a course name: "
                    }
                ]);
                student_manager.enroll_student(enroll_student.student_id, enroll_student.Course_name);
                break;
            case "View Student Balance":
                let stu_id = await inquirer.prompt([
                    {
                        name: "stu_id",
                        type: 'number',
                        message: "Enter a Student ID: "
                    }
                ]);
                student_manager.view_student_balance(stu_id.stu_id);
                break;
            case "Pay Fees":
                let pay_fees = await inquirer.prompt([
                    {
                        name: 'stu_id',
                        type: 'number',
                        message: 'Enter Student ID:'
                    },
                    {
                        name: 'fees',
                        type: 'number',
                        message: 'Enter Fees For Pay:'
                    }
                ]);
                student_manager.pay_student_fees(pay_fees.stu_id, pay_fees.fees);
                break;
            case "Show Status":
                let status = await inquirer.prompt([
                    {
                        name: 'stu_id',
                        type: 'number',
                        message: 'Enter Student ID:'
                    }
                ]);
                student_manager.show_student_status(status.stu_id);
                break;
            case "Exit":
                console.log("Exixting...");
                process.exit();
            // exit() == > false the while loop and exit all the code
        }
    }
}
// call main function to execute the code
main();
