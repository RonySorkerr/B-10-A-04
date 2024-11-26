function sendNotification(email){
    if(!email.includes('@')){
        return "Invalid Email";
    }
    const part = email.split('@');

    if(part.length !== 2 || part[0] === '' || part[1] === ''){
        return "Invalid Email"
    }
    const userName = part[0];
    const domainName = part[1];

    return userName + ' sent you an email from ' + domainName +'.';
}
