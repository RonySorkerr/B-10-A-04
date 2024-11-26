function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let totalTime = 0;
    for(let i = 0; i <waitingTimes.length; i++){
        totalTime+=waitingTimes[i];
    }
    let averageTime = totalTime/ waitingTimes.length;
    averageTime = Math.round(averageTime);

    let peopleAhead = serialNumber - 1;

    let peopleRem = peopleAhead - waitingTimes.length;

    let waitTime = 0;
    if(peopleRem > 0){
        waitTime = peopleRem * averageTime;
    }

    return waitTime;
}
