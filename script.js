const element = document.getElementById("primo");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("p").innerHTML = "Hello World";
}