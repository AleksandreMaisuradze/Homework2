// 1

for (let a = 5; a < 100; a++) {
    console.log(a);
}



// 2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let e = 0; e < array1.length; e++) {
    if (array1[e] > 0 && array1[e] < 10) {
        console.log(array1[e]);
    }
}

// 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let f = 0; f < array2.length; f++) {
    if (f === 5)
        break; {
        console.log("aris")
    }
}

// 4

let array3 = [1, 2, 3, 4, 5];

let sum = 0;

for (let b = 0; b < array3.length; b++) {
    sum = sum + array3[b];
}
console.log(sum);

// 5

let array4 = [1, 2, 3, 7, 6, 9];

let sum1 = 0;
let divide

for (let c = 0; c < array4.length; c++) {
    sum1 = sum1 + array4[c];
    divide = sum1 / array4.length;
}

console.log(divide);

// 6

let array5 = [1, 2, 3, 7, 6, 9];

for (d = 0; d < array5.length; d++) {
    if (d === 3) {
        continue;
    }
    console.log(array5[d])
}

// 7

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user.studentstatus);

// 8 

let user2 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
};

if (user2.age < 18 && user2.studentstatus === "active") {
    console.log("hello");
}

if (user2.name === "levani") {
    console.log("hello levani");
}

if (user2.studentstatus === "active" || user2.age < 25) {
    console.log("hello world");
}
else {
    console.log("error");
}

// 9 

let array6 = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]];

for (let g = 0; g < array6.length; g++) {
    for (let h = 0; h < array6[g].length; h++) {
        if (array6[g][h] > 0) {
            console.log(array6[g][h]);
        }

    }
}

// 10 

let numbers = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}
for (i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 != 0) {
        console.log(numbers[i]);
    }




// 11 

let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
];

for (j = 0; j < users.length; j++) {
    if (users[j].status === true) {
        console.log(users[j]);

    }

}

let sd = [2, 3, 4, 5, 6, 7, 8, 9,]

for (let p = 0; p < sd.length; p++) {
    console.log(sd[p]);
}






