// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

// Function that returns a tax calculation function based on income
const calculateTax = (income) => {
    return () => {
        let taxRate;

        if (income <= 50000) {
            taxRate = 0.1; // 10% tax rate for income <= 50,000
        } else if (income <= 100000) {
            taxRate = 0.2; // 20% tax rate for income between 50,001 and 100,000
        } else {
            taxRate = 0.3; // 30% tax rate for income > 100,000
        }

        return income * taxRate; // Returns the tax to be paid
    };
};

// Test the function with various incomes
const taxForLowIncome = calculateTax(40000)();   // Income <= 50,000 -> 10% tax
const taxForMediumIncome = calculateTax(75000)(); // Income between 50,001 and 100,000 -> 20% tax
const taxForHighIncome = calculateTax(150000)();  // Income > 100,000 -> 30% tax

console.log(`Tax for low income (40,000): $${taxForLowIncome}`);
console.log(`Tax for medium income (75,000): $${taxForMediumIncome}`);
console.log(`Tax for high income (150,000): $${taxForHighIncome}`);
