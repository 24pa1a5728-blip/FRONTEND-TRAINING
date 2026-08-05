let res = document.getElementById("res");

document.getElementById("sbt").onclick = function() {
    let num1 = Number(document.getElementById("input1").value);
      let num2 = Number(document.getElementById("input2").value);
    res.textContent = (num1 < num2 )? `${num1} is Lesser` : `${num2} is  Lesser`;
}
