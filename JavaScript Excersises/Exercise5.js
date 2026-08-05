
let result = document.getElementById("res");

document.getElementById("sbt").onclick = function () {

    let num = Number(document.getElementById("input").value);
    result.textContent = num > 0 ? `${num} is positive number` : `${num} is negative number`;
};
