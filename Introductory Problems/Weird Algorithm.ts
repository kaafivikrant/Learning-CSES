import fs from "fs";
import path from "path";

function weirdAlgorithm(n: number): number[] {
    if (n <= 0) {
        throw new Error("Input must be a positive integer");
    }
    let count: number[] = [];
    while (n !== 1) {
        if (n % 2 === 0) {
            count.push(n);
            n = n / 2;
        } else {
            count.push(n);
            n = 3 * n + 1;
        }
    }
    count.push(1);
    return count;
}

// Optimize file reading and parsing
// const pathToFile = path.join(__dirname, "./Weird Algorithm tests");
// const files = fs.readdirSync(pathToFile);

// const inputFiles = files.filter(file => file.endsWith(".in"));
// const outputFiles = files.filter(file => file.endsWith(".out"));

// const in_file = inputFiles.map(file => {
//     const filePath = path.join(pathToFile, file);
//     const data = fs.readFileSync(filePath, "utf-8").trim();
//     return {
//         filePath: Number(file.slice(0, -3)),
//         data: Number(data)
//     };
// });

// const out_file = outputFiles.map(file => {
//     const filePath = path.join(pathToFile, file);
//     const data = fs.readFileSync(filePath, "utf-8");
//     return {
//         filePath: Number(file.slice(0, -4)),
//         data: data.trim().split(' ').map(Number)
//     };
// });

// ... existing code ...

// Optimize comparison loop
console.time("Total time");

// for (let i = 0; i < in_file.length; i++) {
//     const result = weirdAlgorithm(in_file[i].data);
//     const isCorrect = result.length === out_file[i].data.length && result.every((value, index) => value === out_file[i].data[index]);
//     console.log(`${isCorrect ? "Correct" : "Wrong"} answer for input file ${in_file[i].filePath}`);
//     if (!isCorrect) {
//         console.log("Result:", result);
//         console.log("Expected:", out_file[i].data);
//     }
// }

/*

11 - Total time: 0.067ms - 3.709ms

100 - Total time: 0.068ms - 12.759ms

1000 - Total time: 0.558ms - 282.699ms

10000 - Total time: 5.575ms - 3.012s

100000 - Total time: 42.759ms - 33.867s

1000000 - Total time: 2.972s - 6:34.807 (m:ss.mmm)

10000000 - Total time: 41.374s

*/

const input = Number(process.argv[2]);

for(let i = 1; i <= input; i++) {
    weirdAlgorithm(i);
}

console.timeEnd("Total time");

/*

Final Sumitted Code

var readline = require('readline');

function weirdAlgorithm(n) {
    if (n <= 0) {
        throw new Error("Input must be a positive integer");
    }
    while (n !== 1) {
        process.stdout.write(n + " ");
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    console.log(1);
}

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (line) {
    var input = Number(line);
    weirdAlgorithm(input);
});



*/