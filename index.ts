import inquirer from 'inquirer';

class Student{
    static counter = 1000
    id:number;
    name:string;
    courses:string[];
    balance: number;

    constructor(name:string){
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; //initialize an empty array for courses****
        this.balance = 100
    }

    // method to enroll a student in a course

    enroll_course(course:string){
        this.courses.push(course) //push course name in the empty course array***
    }

    // method to view a student balance

    view_balance(){
        console.log(`Balance for ${this.name} : $${this.balance}`);
    }

    // method for pay tution fee for a student

    pay_fees(amount:number){
        this.balance -= amount;
        console.log(`$${amount} fees paid successfully for ${this.name}`)
    }

    // method for desplay student details

    show_status(){
        console.log(`ID: ${this.id}`)
        console.log(`NAME: ${this.name}`)
        console.log(`COURSES: ${this.courses}`)
        console.log(`BALANCE: ${this.balance}`)
    }

}

// class for student manage class to manage student

class Student_manager {
    students: Student[]

    constructor(){
        this.students = []; //initially empty but when we add student then it saves in this array


    }
    // method to add a student
    add_student(name:string){
        let student = new Student(name);
        this.students.push(student) // save new student in the array***
        console.log(`Student: ${name} added successfully. Student ID: ${student.id}`)
    }


}