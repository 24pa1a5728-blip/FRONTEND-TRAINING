let res = document.getElementById("res");

document.getElementById("sbt").onclick = function() {
    let num = Number(document.getElementById("input").value);
    res.textContent = (num % 2 == 0 )? `${num} is an even number` : `${num} is  a odd number`;
}
