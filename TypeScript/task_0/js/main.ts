interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Misael',
	lastName: 'Bazan',
	age: 30,
	location: 'Europa'
}

const student2: Student = {
	firstName: 'Ennzo',
	lastName: 'Ponce',
	age: 30,
	location: 'Rusia'
}

const studentsList: Student[] = [student1, student2];

// Obtener referencia al cuerpo de la tabla en el HTML
const tableBody = document.getElementById("student-table-body");

// Iterar sobre la lista de estudiantes y agregar una fila para cada uno
studentsList.forEach(student => {
    // Crear una nueva fila
    const row = document.createElement("tr");

    // Crear celdas para el nombre y la ubicación
    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    // Agregar las celdas a la fila
    row.appendChild(nameCell);
    row.appendChild(locationCell);

    // Agregar la fila al cuerpo de la tabla
    tableBody.appendChild(row);
});