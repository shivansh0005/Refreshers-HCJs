
let result=document.getElementById("result");
function az(e){
    let a=document.getElementById("er").value;
 result.innerText = "Your weight in Pounds is "+(a *2.2)+" Pounds";
 e.preventDefault();
}

x.addEventListener("click",az);