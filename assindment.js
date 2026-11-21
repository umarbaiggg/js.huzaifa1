// ans no 1

let temperatures = [26, 28, 30, 32, 34, 27, 29];

let total = 0;

for (let i = 0; i < temperatures.length; i++) {
    total += temperatures[i];
}

let average = total / temperatures.length;
let aboveAverage = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > average) {
        aboveAverage++;
    }
}

console.log("Weekly Temperatures:", temperatures);
console.log("Average Temperature:", average);
console.log("Days Above Average:", aboveAverage);


// ans no2 

let marks = [62, 48, 79, 93, 41, 55, 86, 37];

console.log("Original Marks:", marks);

let reversedMarks = [...marks].reverse();
console.log("Reverse Marks:", reversedMarks);

let highest = marks[0];
let lowest = marks[0];
let passed = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Students Passed:", passed);


// ans no 03


let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let grandTotal = 0;
let highestSales = 0;
let highestBranch = 0;

for (let i = 0; i < sales.length; i++) {
    let branchTotal = 0;

    for (let j = 0; j < sales[i].length; j++) {
        branchTotal += sales[i][j];
    }

    console.log("Branch " + (i + 1) + " Sales:", sales[i]);
    console.log("Branch " + (i + 1) + " Total:", branchTotal);

    grandTotal += branchTotal;

    if (branchTotal > highestSales) {
        highestSales = branchTotal;
        highestBranch = i + 1;
    }
}

console.log("Total Sales of All Branches:", grandTotal);
console.log("Highest Sales Branch: Branch " + highestBranch);
console.log("Highest Branch Sales:", highestSales);


// ans no 04


let route = [5, 10, 15, 20, 25, 30];

console.log("Original Route:", route);

let reversedRoute = [...route].reverse();

console.log("Reversed Route:", reversedRoute);

// answer no 05


let productCode = prompt("Enter Product Code:");

let code = productCode.toUpperCase();

let reversedCode = code.split("").reverse().join("");

console.log("Entered Product Code:", productCode);

if (code === reversedCode) {
    console.log("The product code is a palindrome.");
} else {
    console.log("The product code is not a palindrome.");
}
