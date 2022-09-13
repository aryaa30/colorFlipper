console.log("hello_User");
const hexCode =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const clbtn = document.getElementById("btn");   //clbtn=colorbutton
const cCode = document.querySelector(".cCode");
const refresh=document.querySelector(".refresh");
clbtn.addEventListener("click", function() {
let hexM ="#"
for(let i=0; i<6; i++){
    hexM += hexCode[randomNumber()]
    
}
console.log(hexM);
cCode.textContent=hexM;
document.body.style.backgroundColor = hexM;
document.getElementById("ref").style.backgroundColor =hexM;
document.getElementById("btn").style.backgroundColor =hexM;


});

function randomNumber() {
    return Math.floor(Math.random() * hexCode.length);}


