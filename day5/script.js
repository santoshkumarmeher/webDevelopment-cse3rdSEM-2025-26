// var myName = "Santosh"
// var myName = "Meher"

// let myName = "Santosh"
// myName = "meher"

// const myName = "Santosh"
// myName = "Santosh"

// console.log(myName)


// {
//     var myName = "Santosh"
// }
// console.log(myName)
// {
//     let myName = "Santosh"
// }
// console.log(myName)


        document.getElementById("title").innerText = "This is title"
// document.getElementById("title1").innerHTML = "<a href='#'>This is title</a>"
// document.getElementsByClassName("text")[0].innerText = "This is Text"
// document.getElementsByClassName("text")[1].innerText = "This is Text2"
element = document.getElementById("title");
element.style.backgroundColor = "red";
// col = document.querySelector(".text").style.backgroundColor:"red";

    // document.getElementById("title").style.olor("red");


function colorChangeBlue(){
    element = document.getElementById("title");
element.style.backgroundColor = "blue";
}
function colorChangeRed(){
    element = document.getElementById("title");
element.style.backgroundColor = "red";
}