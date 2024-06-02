"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Jatin",
    age: 19,
    hobbies: ["Sports", "Crickets"],
    role: Role.ADMIN
};
console.log(person.name);
