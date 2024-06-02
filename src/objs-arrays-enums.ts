//Numbers next to the primary property, are incremented

enum Role { 
    ADMIN = 5,
    READ_ONLY, //6
    AUTHOR //7
}

const person = {
    name: "Jatin",
    age: 19,
    hobbies: ["Sports", "Crickets"],
    role: Role.ADMIN
}

console.log(person.name)


