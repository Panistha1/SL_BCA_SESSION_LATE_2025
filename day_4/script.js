
let code=402;
status_msg=document.getElementById('status')

switch(code){
    case 400:
    console.log("Bad request");
    status_msg.innerHTML="Bad request";
    break;
     case 401:
    console.log("unauthorized access");
    status_msg.innerHTML="unauthorized access";
    break;
     case 402:
    console.log("payment required");
    status_msg.innerHTML="payment required";
    break;
     case 403:
    console.log("access forbidden");
    status_msg.innerHTML="access forbidden";
    break;
    case 404:
    console.log("page notfound");
    status_msg.innerHTML="page notfound";
    break;
     default:
    console.log("something went wrong");
    status_msg.innerHTML="something went wrong";
    break;
}

//for loop 
team=document.getElementById('team');

for(let count=0;count<10;count++){
    const span=document.createElement("span");
    span.innerHTML="Team <strong> "+ count + " </strong><br>";
    document.body.appendChild(span);
}