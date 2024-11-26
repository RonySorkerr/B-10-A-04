/*function signature/sample */
function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || income <= expenses) {
        return "Invalid Input";
    }
    let taxAmount = income - expenses;

    let tax = taxAmount * 0.2;

    return tax;

}
