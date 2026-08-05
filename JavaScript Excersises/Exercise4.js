
let result = document.getElementById("res");

document.getElementById("sbt").onclick = function () {

    let num = Number(document.getElementById("input").value);
    if( num < 0)
    {
        result.textContent = `${num} is not a valid input`;
    }
     else if (num % 3 === 0) {
        result.textContent =  `${num} is multiple of 3`;
    } else {
        result.textContent =  `${num} is not a multiple of 3`;
    }
};
