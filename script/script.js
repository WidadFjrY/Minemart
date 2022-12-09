function Visibility(){
    let sandi = document.getElementById("password");
    if (sandi.type === "password"){
        sandi.type = "text";
    } else {
        sandi.type = "password";
    }
}

function Visibility1(){
    let sandi = document.getElementById("password ulang");
    if (sandi.type === "password"){
        sandi.type = "text";
    } else {
        sandi.type = "password";
    }
}

function Eyes(){
    let eyes = document.getElementById("eyes");
    let eyes2 = document.getElementById("eyes2");
    eyes.classList.toggle("hidden")
    eyes2.classList.toggle("hidden")
}

function Eyes1(){
    let eyes3 = document.getElementById("eyes3");
    let eyes1 = document.getElementById("eyes1");
    eyes3.classList.toggle("hidden")
    eyes1.classList.toggle("hidden")
}

function Password(){
    let input = document.getElementById("password").value;

    input = input.trim();
    document.getElementById("password").value = input;

    if(input.length < 8){
        document.getElementById("password").style.border = "thin #ec4899 solid";
        document.getElementById("valid").innerText = "Harus lebih dari 8 karakter"
        document.getElementById("valid").style.color = "#ec4899"
    } else if(!input.match(/[0-9]/i)){
        document.getElementById("password").style.border = "thin #ec4899 solid";
        document.getElementById("valid").innerText = "Harus mengandung angka"
        document.getElementById("valid").style.color = "#ec4899"
    } else if (!input.match(/[A-Z]/g)){
        document.getElementById("password").style.border = "thin #ec4899 solid";
        document.getElementById("valid").innerText = "Harus mengandung huruf besar"
        document.getElementById("valid").style.color = "#ec4899"
    } else if (!input.match(/[a-z]/g)){
        document.getElementById("password").style.border = "thin #ec4899 solid";
        document.getElementById("valid").innerText = "Harus mengandung huruf kecil"
        document.getElementById("valid").style.color = "#ec4899"
    } else {
        document.getElementById("password").style.border = "";
        document.getElementById("valid").innerText = ""
    }  
     
}

function Validate(){
    let inputUlang = document.getElementById("password ulang").value;
    let input = document.getElementById("password").value;

    if (input !== inputUlang) {
        document.getElementById("validate").innerText = "Kata sandi tidak sesuai"
        document.getElementById("password ulang").style.border = "thin #ec4899 solid"
        document.getElementById("validate").style.color = "#ec4899"
    } else {
        document.getElementById("password ulang").style.border = ""
        document.getElementById("validate").innerText = ""
    }
}

