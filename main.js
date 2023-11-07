
var people = [
    { name: "Ali", surname: "Huseynov", age: 19 },
    { name: "Haci", surname: "Ahmadov", age: 28 },
    { name: "Ali", surname: "Shukurlu", age: 18 },
    { name: "Veli", surname: "Veliyev", age: 58 }
]

var tableBody = document.getElementById("tableBody");

people.forEach(function(person) {
    var row = tableBody.insertRow();
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = person.name;
    cell2.textContent = person.surname;
    cell3.textContent = person.age;
})

