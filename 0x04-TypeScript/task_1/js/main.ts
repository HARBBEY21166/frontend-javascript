interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(director1);


// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Outputs: J. Doe


// Interface for StudentClass constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const studentInstance = new StudentClass("John", "Doe");
console.log(studentInstance.workOnHomework()); // "Currently working"
console.log(studentInstance.displayName()); // "John"