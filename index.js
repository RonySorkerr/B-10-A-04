
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



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input"
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input"
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;

}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let averageTime = totalTime / waitingTimes.length;
    averageTime = Math.round(averageTime);

    let peopleAhead = serialNumber - 1;

    let peopleRem = peopleAhead - waitingTimes.length;

    let waitTime = 0;
    if (peopleRem > 0) {
        waitTime = peopleRem * averageTime;
    }

    return waitTime;
}
