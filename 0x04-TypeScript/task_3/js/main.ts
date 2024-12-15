// main.ts
import { RowID, RowElement } from './interface';
import { insertRow, deleteRow, updateRow } from './crud';

// Create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert the row and get a new row ID
const newRowID: RowID = insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = { 
    ...row, 
    age: 23 
};

// Update and delete the row
updateRow(newRowID, updatedRow);
deleteRow(newRowID);