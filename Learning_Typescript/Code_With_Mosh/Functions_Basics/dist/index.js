"use strict";
function calculateTax(income, taxYear, dependents = 0) {
    const adjustedIncome = income - (5000 * dependents);
    if (taxYear && taxYear < 2022)
        return adjustedIncome * 1.2;
    return adjustedIncome * 1.3;
}
console.log(calculateTax(80000));
console.log(calculateTax(80000, 2020));
console.log(calculateTax(80000, 2020, 2));
console.log(calculateTax(80000, undefined, 2));
