let input = document.querySelector("#input");
let para = document.querySelector("#para");
let icon = document.querySelector("#eyeicon");
input.addEventListener("input",()=>{
    if(input.value.length == 0){
        para.innerHTML = "";
    }
    else{
        para.innerHTML = "Password is"
    }
    if( input.value.length < 4 ){
        para.innerHTML = "Password is Weak";
        input.style.borderColor = "red";
        para.style.color = "red";
        input.style.color = "red";
    }
    else if( input.value.length > 4 && input.value.length < 8){
        para.innerHTML = "Password is Medium";
    }
    else if (input.value.length >= 8 ){
        para.innerHTML = "Password is Strong";
        para.style.color = "green";
        input.style.color = "green";
        input.style.borderColor = "green";
    }
})
function changepattern(){
    if( input.type == "password"){
        input.type = "text";
        icon.src = "eye.png";
    }
    else{
        input.type ="password";
        icon.src = "eye-off.png";
    }
}
icon.addEventListener("click",()=>{ 
     changepattern();
})