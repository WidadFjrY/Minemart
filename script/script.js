function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.onload = function () {
    let count = 60*60;
    display = document.getElementById("clockCounter")
    startTimer(count, display)
};

let price = 60000;
let diskon = 90;
let bil = (60000 / 90) * 100;


console.log(bil)

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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}



// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "inline block";
// }







