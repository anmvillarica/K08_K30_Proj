const LEVEL = [1, 2, 3];

var sbt = document.getElementById("submit_btn");

sbt.addEventListener("click", checkInput());

function checkInput(){
    var inp1 = document.getElementById("blank1");
    
    if (inp1 == "transform:")
    {
        alert("Ang galing mo!");
    }
}
