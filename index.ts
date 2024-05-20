import inquirer from "inquirer"

class Student {
    name: string 
    constructor(n: string) {
        this.name = n 
    }
};

class Person {
    students: Student[] = []
    addStudent(obj: Student) {
        this.students.push(obj)
    }
};

const persons = new Person()

const programStart = async(persons: Person)=>{
    do{
    console.log("Welcome!");

    const answer = await inquirer.prompt({
         name: "select",
         type: "list",
         message: "Whom would you like to interact with?",
         choices: ["Staff", "Student", "Exit"]
    })
    if (answer.select == "Staff") {
        console.log("You approach the staff room. Please feel free to ask any question.");
    } else if (answer.select == "Student") {
        const answer = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the student's name you wish to engage with"
        })
        const student = persons.students.find(val => val.name == answer.student)
    
        if (!student) {
            const name = new Student(answer.student)
            persons.addStudent(name)
            console.log(`Hello! I am ${name.name}. Nice to meet you`);
            console.log("New Student added.");
            console.log("Current Students list:");
            console.log(persons.students);
            } else {
                console.log(`Hello! I am ${student.name}. Nice to see you again.`);
                console.log ("Existing students list:");
                console.log(persons.students);
            }
        } else if (answer.select == "Exit") {
            console.log("Exiting the program....... ");
            process.exit();
            
        }
    } while(true)
}

programStart(persons);