let password = '';

if(password.length == 8){
    console.log('WELCOME');
}
else if(password.length <= 8 && password.length > 0){
    console.log('PASSWORD IS TOO SHORT');
}
else if(password.length >= 8){
    console.log('TOO LONG PASSWORD');
    console.log('PASSWORD SHOULD BE 8 CHARACTERS');
}
else{
    console.log('PLEASE PROVIDE A PASSWORD');
}