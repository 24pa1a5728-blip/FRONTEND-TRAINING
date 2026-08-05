
let res =document.getElementById("res");
document.getElementById("sbt").onclick = function(e) {
    e.preventDefault();
    let stuname = document.getElementById("inputstu").value;
    if(stuname == "")
    {
      alert("Enter Student name First")
    }
    let s1 = Number(document.getElementById("sub1").value); 
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);
    let s6 = Number(document.getElementById("sub6").value);
    let obtainedMarks = s1+s2+s3+s4+s5+s6;
    let totalMarks = 600;
    let reqAns = (obtainedMarks / totalMarks) * 100;
    res.textContent = `${stuname} percentage is ${reqAns}%`;
    
}
