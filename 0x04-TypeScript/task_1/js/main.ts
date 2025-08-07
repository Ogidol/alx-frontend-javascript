interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  contract: boolean;
}
const Teacher1: Teacher = {
  firstName: "Yakub",
  fullTimeEmployee: false,
  lastName: "Dauda",
  location: "Niger",
  contract: false,
};

const Teacher2: Teacher = {
  firstName: "Quadri",
  fullTimeEmployee: false,
  lastName: "Ogundele",
  location: "Ibadan",
  contract: false,
};

const Teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
const TeachersList: Teacher[] = [Teacher1, Teacher2];

const table = document.createElement("table");
const headerRow = table.insertRow();

const header1 = document.createElement("th");
header1.textContent = "firstName";
headerRow.appendChild(header1);

const header2 = document.createElement("th");
header2.textContent = "location";
headerRow.appendChild(header2);

TeachersList.forEach((Teacher) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = Teacher.firstName;
  locationCell.textContent = Teacher.location;
});

document.body.appendChild(table);

console.log(Teacher3);
