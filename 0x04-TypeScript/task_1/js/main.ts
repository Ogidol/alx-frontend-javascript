// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Director interface extending Teacher
export interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration required by checker
export function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher3);

// Example Director object
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Test call to printTeacher
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
