function newPerson(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

var people = [
    new newPerson("Naval", 48, "Data Scientist"),
    new newPerson("John", 26, "Bartender"),
    new newPerson("Spencer", 42, "Writer"),
    new newPerson("Alice", 57, "Painter"),
    new newPerson("Sarah", 35, "Student")
];

var save;

for (var i = 0; i < people.length; i++) {
    save = people[i];
    for (var j = 0; j < people.length; j++) {
        if (people[i].age > people[j].age) {
            people[i] = people[j];
            people[i] = save; 
        }
    }
} console.log(people);

