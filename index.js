for (let i = 1; i > 0; i++) {
    var userInput = prompt('Choose an option:\n1. Convert USD to PKR\n2. Convert PKR to USD');

    if (userInput === '1') {
     let useramount = prompt('Enter usd amount')
     if (isNaN(useramount)) {
        alert("The NaN amount in pkr will be Rs.Nan/-")
        }
    let result=useramount*280
    let roundedResult = result.toFixed();
    alert(`The ${useramount} amount in Pkr will be Rs.${roundedResult}/-`);
    
    var continueProgram = prompt('Do you want continue?\n1. Yes\n2. No');

  if (userInput === '2') {
           
        alert("Thank you for using my converter. please refersh to start again!");
    break;
    } 
}

else if  (userInput === '2') {
    let useramount = window.prompt('Enter pkr amount');
    if (isNaN(useramount)) {
        alert("The NaN amount in usd will be $Nan")
        
     }
let result=useramount/280;
let roundedResult = result.toFixed(2);
alert(`The ${useramount} amount in usd will be $${roundedResult}`);

var continueProgram = prompt('Do you want continue?\n1. Yes\n2. No');

  if (userInput === '2') {
           
        alert("Thank you for using my converter. please refersh to start again!");
    break;
    } 

} 
 else {
    alert('please select from 1 to 2 ');
} }
