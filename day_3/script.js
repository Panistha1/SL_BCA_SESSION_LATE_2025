//ternary operator 
let ismember=true;

console.log(ismember ? '12.00' :'4.00');
let isActive=true;
title=document.getElementById('title');
isActive ? title.innerHTML ="I am active" :title.innerHTML="I am inactive";

demo=document.getElementById('demo');
if(isActive){
    demo.innerHTML="I am today demo";
}else{
    demo.innerHTML="I am not showing  today....";

}
//if elses if statement 
let dayName="Wednesday";
day=document.getElementById('day');

let dayCount = 4;

if( dayName ===  "Wednesday" && dayCount===4){
    day.innerHTML=dayName;
} else if ( dayName ===  "Sunday" ){
    day.innerHTML="Sunday";
}else{
    day.innerHTML="no day found";
}
switch(dayName){
    case "Sunday":
    console.log(" today is Sunday");
    break;
     case "Monday":
    console.log(" today is Monday");
    break;
     case "Wednesday":
    console.log(" today is Wednesday");
    break;
    default:
        console.log("Day not found");

}
