var marg = 0;

function identifyById() {
element.getElementById("para1");
console.log(element);
}

function identifyByClass() {
  element=document.getElementsByClassName("class1");
  console.log(element);
}

function byTag() {
  element=document.getElementsByTagName("p");
  console.log(element);
}

function changeBackground() {
  element = document.getElementById("block1");
  element.style.backgroundColor="blue";
}

function increaseFont() {
  element = document.getElementById("block2");
  element.style.fontSize="1.7em";
}

function changeFontColor() {
  element=document.getElementById("block3");
  element.style.backgroundColor="blue";
}

function revertColor() {
  element=document.getElementById("block3");
  element.style.backgroundColor="blue";
}

function hide() {
  element=document.getElementById("block4");
  element.style.display="none";
}

function changeBackColor(color, className) {
  elements = document.getElementsByClassName(className);
    if(className==="box1"){
       for(var i = 0; i < elements.length; i++){
         elements[i].style.backgroundColor = "red";
       }
}else {
  for(var i=0; i< elements.length;i++)
  elements[i].style.backgroundColor = "yellow";
}

}
function numbersOnly(e) {
  if(parseInt(e.key) >= 0 && parseInt(e.key) <= 9){
    return e;
  }
return false;
}

function addAdjacent() {
  element = document.getElementById("para2");
  para = document.createElement("p");
  node = document.createTextNode("I got generated on the fly...");
  para.appendChild(node);
  element.appendChild(para);
}

function removePara() {
  element = document.getElementById("para3");
  element2 = document.getElementById("para4");
  element.parentElement.removeChild(element2);
}

function myMove() {
  element = document.getElementById("box5");
   pos = 0;
   id = setInterval(frame,100);
   function frame() {
     console.log(pos);
     if(pos == 360){
       clearInterval(id);
     } else {
       pos++;
}

function myFunction() {
  element=document.getElementById("box5");
  ​document.getElementById("box5")).style.backgroundcolor="blue"
}

function changeOn() {
  element = document.getElementById("fname1");
  element.value = element.value.toUpperCase();
}

function preferedBrowser() {
element = document.getElementById("browsers");
}

function color(elem) {
elem.style.backgroundColor="red";
$(elem).css({"background-color" : "red"});
}

function inputxt(s) {
  element = document.getElementById("demo");
  element.textContent = s.value;
}

function confirmInput() {
  alert("!!");
}

function message() {
  alert("You deleted");

}

function keydown(n) {
  console.log(n);
}

function keypress(n) {
  element = document.getElementById("keycode");

}

function keyup() {
  element = document.getElementById("fname2");
  $("#fname2").val($("#fname2").val().toUpperCase());

}

function writeMessage() {
  elements = document.getElementsByTagName("input");
  for(i = 0; i < elements.length; i++){
     if(elements[i].name=="myInput"){
       elements[i+1].value = elements[i].value;
     }
   }

}
