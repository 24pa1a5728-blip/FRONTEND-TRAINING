let res = document.getElementById("res");

document.getElementById("sbt").onclick = function() {
    let num = Number(document.getElementById("input").value);
    let reqsol = num % 10;
    res.textContent = `${num} first digit is ${reqsol}`;
}
