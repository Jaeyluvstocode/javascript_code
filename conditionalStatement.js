// If Statement
let temperature = 30;

if(temperature > 25) {
    console.log('it is a hot day!')
}else {
    console.log('it is a cold day')
}

const isAdmin = false;
const isSuperUser = true;

if( isAdmin || isSuperUser){
    console.log("you can have access to this app")
}else {
    console.log("you are not allowed to access this")
}


const paidSchoolfees = true;
const hasGoodHealth = true;

if(paidSchoolfees && hasGoodHealth) {
    console.log("welcome to the class")

}else{
    console.log("go back home")
}





let fruit ="apple";
if(fruit === "bannana"){
    console.log("we have bannana in the store")
} else if(fruit ==="orange"){
    console.log("we have orange in our store")
} else if(fruit === 'coconut'){
    console.log('coconut is in our store')
} else if(fruit ==='apple'){
    console.log('we have apple in our store')
} else{
    console.log('we do not have any fruit in our store')
}


const actions = ["start", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true) {
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction );
    break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this action");
        break;
        default:
            console.log("No valid case found")
}