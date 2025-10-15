/*
Checke folgene Array Funktionen. Mache Beipsielcode

Map
Filter
Sort
Find
Reduce
Some
Every
*/

interface Student {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean;
}

const students: Student[] = [
    { firstname: "Alice", lastname: "Johnson", age: 20, isMale: false },
    { firstname: "Brian", lastname: "Smith", age: 22, isMale: true },
    { firstname: "Clara", lastname: "Nguyen", age: 19, isMale: false },
    { firstname: "David", lastname: "Martinez", age: 21, isMale: true },
    { firstname: "Ella", lastname: "Brown", age: 23 }
];

students.forEach((student: Student) => {
    console.log(student);
})


// map (full name)
const result = students.map(student => `${student.firstname} ${student.lastname}`);

console.log("\nMap, Full Names:", result);


// filter (students older than 20)
const result2 = students.filter(student => student.age > 20);

console.log("\nFilter, Age older than 20:", result2);


// sort (sorted by age)
const result3 = [...students].sort((a, b) => a.age - b.age);
console.log("\nSort, By Age:", result3);


// find (find students firstname)
const result4 = students.find(student => student.firstname === "Clara");
console.log("\nFind, Clara:", result4);


// reduce (total age of all students)
const result5 = students.reduce((sum, student) => sum + student.age, 0);
console.log("\nReduce, Total Age:", result5);


// some (if Male)
const result6 = students.some(student => student.isMale === true);
console.log("\nSome, Has Male:", result6);

// every (if every student is older than 18)
const result7 = students.every(student => student.age > 18);
console.log("\nEvery, All older than 18:", result7);

