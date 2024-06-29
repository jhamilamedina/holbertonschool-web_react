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

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  return typeof salary === 'number' && salary < 500
    ? new Teacher()
    : new Director();
}

// 6. Creating functions specific to employees

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
}

// 7. String literal types

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
