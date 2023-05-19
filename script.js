const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

function error(input, message){
    input.className = "form-control is-invalid";
    div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input){
    input.className = "form-control is-valid";
}
const validateEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)){
        success(input);
    }
    else {
        error(input,"Düzgün bir email girin.")
    }
};

const passwordControl = (p1,p2) =>{
    if((p1.value.length >= 8 && p1.value.length <= 16) && p1.value == p2.value){
        success(p1);
        success(p2);
    }
    else{
        error(p1,"ya parolanız çok kısa(8-16 karakter arasında olmalı) ya da parolanız uyuşmuyor");
        error(p2,"ya parolanız çok kısa(8-16 karakter arasında olmalı) ya da parolanız uyuşmuyor");
    }
}


const checkRequired = (inputs) =>{
    inputs.forEach(input => {
        if (input.value == ""){
            error(input,`${input.id} boş bırakılmaz.`);
        }
        else{
            success(input);
        }
    });
    
};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkRequired([username,email,password,repassword]);
    validateEmail(email);
    passwordControl(password,repassword);
})