let result = document.getElementById("res");

document.getElementById("sbt").onclick = function () {

    let num = Number(document.getElementById("input").value);
    if(num > 96 || num < 0)
    {
        result.textContent = `${num} is not a valid input`;
    }
     else if (num % 96 === 0) {
        result.textContent =  `${num} is factor of 96`;
    } else {
        result.textContent =  `${num} is not a factor of 96`;
    }
};
