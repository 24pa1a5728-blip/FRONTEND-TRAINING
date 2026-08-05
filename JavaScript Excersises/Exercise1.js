let result = document.getElementById("res");

document.getElementById("sbt").onclick = function () {

    let num = Number(document.getElementById("input").value);

    if (num % 7 === 0) {
        result.textContent = "Divisible by 7";
    } else {
        result.textContent = "Not divisible by 7";
    }
};
