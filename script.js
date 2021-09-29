var day = moment().format("dddd, MMMM Do")
$("#currentDay").text(day);

var past = document.querySelector ("#past");
var present = document.querySelector ("#present");
var future = document.querySelector ("#future");

var nine = document.querySelector("#nine");



const saveBtn = document.getElementById ("saveBtn");
const input1 = document.getElementById("input1");
const output1 = document.getElementById("output1");
    
    
saveBtn.onclick = function () {
    const input = JSON.stringify("input1");
    

    console.log(input);

}