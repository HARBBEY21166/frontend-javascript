// Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher Class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Create Employee Function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Example usage
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director


// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Execute work function
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Example usage
console.log(executeWork(createEmployee(200))); // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"


// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Teach Class function
function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math' 
        ? 'Teaching Math' 
        : 'Teaching History';
}

// Example usage
console.log(teachClass('Math')); // "Teaching Math"
console.log(teachClass('History')); // "Teaching History"