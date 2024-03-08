const up_b = document.getElementById("up");
up_b.addEventListener("click", up_button);

const down_b = document.getElementById("down");
down_b.addEventListener("click", down_button);
const boobs_size_num = document.getElementById("boobs_size_num");

const generate_button = document.getElementById("generate");
generate_button.addEventListener("click", generate_boobies);
const boobs_text = document.getElementById("boobs_text");


let boobs_size = 0;
function up_button() {
  if (boobs_size>=20){
    console.log("you lie !");
    boobs_size=20;
    console.log("you boobs size is "+boobs_size);
  }
  else{
    boobs_size++;
    console.log("you boobs size is "+boobs_size);
  }
  // Your code here
  console.log("Image clicked!"); // Example: Log a message
  // Call other functions or perform actions
  boobs_size_num.innerText = boobs_size;
}
function down_button() {
  if (boobs_size<=1){
    console.log("you lie !");
    boobs_size=1;
    console.log("you boobs size is "+boobs_size);
  }
  else{
    boobs_size--;
    console.log("you boobs size is "+boobs_size);
  }
  boobs_size_num.innerText = boobs_size;
  // Your code here
  console.log("Image clicked!"); // Example: Log a message
  // Call other functions or perform actions
}
function generate_boobies (){
  let repetition = parseInt(boobs_size/2);
  let spaces = "";
  console.log(repetition)
   spaces= "\u00A0".repeat(repetition);
  boobs_text.innerText = "("+spaces+"."+spaces+") ("+spaces+"."+spaces+")";
}