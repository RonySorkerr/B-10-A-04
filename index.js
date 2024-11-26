
function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || income <= expenses) {
        return "Invalid Input";
    }
    let taxAmount = income - expenses;

    let tax = taxAmount * 0.2;

    return tax;

}


function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const part = email.split('@');

    if (part.length !== 2 || part[0] === '' || part[1] === '') {
        return "Invalid Email"
    }
    const userName = part[0];
    const domainName = part[1];

    return userName + ' sent you an email from ' + domainName + '.';
}
