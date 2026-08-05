let res = document.getElementById("res");

document.getElementById("sbt").onclick = function() {
    let num = Number(document.getElementById("input").value);
    res.textContent = (num >= 100 && num <= 999 )? `${num} is a three digit number` : `${num} is  not a three digit number`;
}
