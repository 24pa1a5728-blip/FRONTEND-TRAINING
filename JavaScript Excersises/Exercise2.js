let result = document.getElementById("res");

document.getElementById("sbt").onclick = function () {

    let num = Number(document.getElementById("input").value);

    if (num % 84 === 0) {
        result.textContent =  `${num} is factor of 84`;
    } else {
        result.textContent =  `${num} is not a factor of 84`;
    }
};
