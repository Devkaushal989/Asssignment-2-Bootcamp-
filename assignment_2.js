const person = {
    name: "Dev Kaushal",
    age: 18,
    occupation: "Student"
  };
  
  function printPersonInfo(person) {
    for (const key in person) {
      console.log(`${key.toUpperCase()}: ${person[key]}`);
    }
  }
  
  printPersonInfo(person);