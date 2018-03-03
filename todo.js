let inputList = document.getElementById("newListInput");
inputList.addEventListener("keyup",function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("addListButton").click();
    this.value='';
  }
});


function addList() {
  let disp = document.getElementById("dispList"),
      newLi = document.createElement("li");
  newLi.innerHTML = "<input type='checkbox' /> " + inputList.value;
  disp.appendChild(newLi);

  inputList.value = '';
}

function delList() {
  let para = document.getElementById("dispList"),
      checks = Array.prototype.slice.call(para.childNodes),
      check;
  while (check = checks.pop()) {
    if(check.firstChild && check.firstChild.checked) {
      para.removeChild(check);
    }
  }
}
