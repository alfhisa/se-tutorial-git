const button = document.getElementById("buttonTheme");
const elements = document.querySelectorAll('*');

var isDarktheme = false;

button.addEventListener("click", myFunction)

function myFunction(){

    console.log("button clicked!");

    if(isDarktheme == false){
        DarkTheme()
    }
    else{
        LightTheme()
    }
}


function DarkTheme(){
    isDarktheme = true
    for(i = 0; i < elements.length; i++){
        elements[i].classList.add("darktheme");
    }
}

function LightTheme(){
    isDarktheme = false
    for(i = 0; i < elements.length; i++){
        elements[i].classList.remove("darktheme");
    }
}
