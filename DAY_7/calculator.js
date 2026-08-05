let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.onclick = function(){

        let value = button.textContent;

        if(value === "C"){

            display.value = "";

        }
        else if(value === "="){

            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }

        }
        else{

            display.value += value;

        }

    };

});
