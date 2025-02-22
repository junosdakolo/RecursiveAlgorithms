
// Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15";
    } else {
        return "Ticket Price: $20";
    }
}
console.log(getTicketPrice(10));


// Weather Clothing Adviser
let temp = 0;
do{
  temp = prompt("Enter Temperature in Degree Celsius :"); 
  temp = parseInt(temp);
}while(isNaN(temp));

let weather = prompt ("is it raining? Yes / No").toLowerCase() === "yes";


  function ChooseCloth(temp,weather){
   if(temp <= 80 && weather){
     alert("Wear heavy cloth and carry your Umbrella it's Raining outside today ");
   }
   else if (temp > 80){
     alert("It's going to be a warm day, wear something light today");
   }

 }
 ChooseCloth(temp,weather);




// Fibonacci Sequence
function fibonaSeq(s){
    function fibona(n){
        if (n === 0) return 0
        if (  n === 1) return 1
        return fibona(n-1) + fibona(n-2)
    }
    let answer = [];
    for (let i = 0 ; i <= s; i++){
        answer.push(fibona(i));
    }
    return answer;
}

console.log(fibonaSeq(1));

function power (base,exp){
    if (exp === 0) return 1
    return base * power(base, exp - 1 )
}