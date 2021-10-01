var day = moment().format("dddd, MMMM Do")
$("#currentDay").text(day);


var saveBtn1 = document.getElementById ("saveBtn1");
var saveBtn2 = document.getElementById ("saveBtn2");
var saveBtn3 = document.getElementById ("saveBtn3");
var saveBtn4 = document.getElementById ("saveBtn4");
var saveBtn5 = document.getElementById ("saveBtn5");
var saveBtn6 = document.getElementById ("saveBtn6");
var saveBtn7 = document.getElementById ("saveBtn7");
var saveBtn8 = document.getElementById ("saveBtn8");
var saveBtn9 = document.getElementById ("saveBtn9");


var input1 = document.querySelector(".input1");
var output1 = document.querySelector(".output1");

var input2 = document.querySelector(".input2");
var output2 = document.querySelector(".output2");

var input3 = document.querySelector(".input3");
var output3 = document.querySelector(".output3");

var input4 = document.querySelector(".input4");
var output4 = document.querySelector(".output4");

var input5 = document.querySelector(".input5");
var output5 = document.querySelector(".output5");

var input6 = document.querySelector(".input6");
var output6 = document.querySelector(".output6");

var input7 = document.querySelector(".input7");
var output7 = document.querySelector(".output7");

var input8 = document.querySelector(".input8");
var output8 = document.querySelector(".output8");

var input9 = document.querySelector(".input9");
var output9 = document.querySelector(".output9");


saveBtn1.addEventListener("click", save1);

output1.textContent = localStorage.getItem("content1");


function save1() {
	localStorage.setItem("content1", input1.value);
	
	output1.textContent = input1.value;
}

saveBtn2.addEventListener("click", save2);

output2.textContent = localStorage.getItem("content2");


function save2() {
	localStorage.setItem("content2", input2.value);
	
	output2.textContent = input2.value;
}


saveBtn3.addEventListener("click", save3);

output3.textContent = localStorage.getItem("content3");


function save3() {
	localStorage.setItem("content3", input3.value);
	
	output3.textContent = input3.value;
}

saveBtn4.addEventListener("click", save4);

output4.textContent = localStorage.getItem("content4");


function save4() {
	localStorage.setItem("content4", input4.value);
	
	output4.textContent = input4.value;
}

saveBtn5.addEventListener("click", save5);

output5.textContent = localStorage.getItem("content5");


function save5() {
	localStorage.setItem("content5", input5.value);
	
	output5.textContent = input5.value;
}

saveBtn6.addEventListener("click", save6);

output6.textContent = localStorage.getItem("content6");


function save6() {
	localStorage.setItem("content6", input6.value);
	
	output6.textContent = input6.value;
}

saveBtn7.addEventListener("click", save7);

output7.textContent = localStorage.getItem("content7");


function save7() {
	localStorage.setItem("content7", input7.value);
	
	output7.textContent = input7.value;
}

saveBtn8.addEventListener("click", save8);

output8.textContent = localStorage.getItem("content8");


function save8() {
	localStorage.setItem("content8", input8.value);
	
	output8.textContent = input8.value;
}


saveBtn9.addEventListener("click", save9);

output9.textContent = localStorage.getItem("content9");


function save9() {
	localStorage.setItem("content9", input9.value);
	
	output9.textContent = input9.value;
}


var row = document.querySelector(".description");
var past = document.querySelector (".past");
var present = document.querySelector (".present");
var future = document.querySelector (".future");



for (let i = 0; i < 9; i++) {

  var currentTime = moment().format("H");
  var currentRow = document.querySelector(".row" + (i + 1));
  var rowTime = 9 + i;
  
  if (rowTime < currentTime) {
    currentRow.classList.add("past");
  }

  if (rowTime == currentTime) {
    currentRow.classList.add("present");
  }
  
  if (rowTime > currentTime) {
    currentRow.classList.add("future");
  }

  
}