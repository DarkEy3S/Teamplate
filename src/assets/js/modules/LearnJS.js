export function learnJS() {}

let salaries = {
    John: 100,
    Pete: 300,
    Merry: 500,
    sevak: 432,
};

const topSalaries = salaries => {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
};

console.log(topSalaries(salaries));
