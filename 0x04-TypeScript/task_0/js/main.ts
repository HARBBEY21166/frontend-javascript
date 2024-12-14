// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane", 
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render table using vanilla JavaScript
function renderTable() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach(student => {
        const row = tbody.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderTable);