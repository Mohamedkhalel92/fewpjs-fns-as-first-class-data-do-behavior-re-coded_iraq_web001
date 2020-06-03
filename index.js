/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t){
  const time = t.split(':');
  if(time[0].parseInt()<12)return "Good Morning";
  if(time[0].parseInt()>12 && time[0].parseInt()<5 )return "Good Afternoon";
  if(time[0].parseInt()>5)return "Good Evening";

}
/* Write your implementation of displayMessage() */
function displayMessage(){

}
