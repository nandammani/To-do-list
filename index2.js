const inputBox=document.getElementById("input-box");
const listContiner=document.getElementById("list-continer");

function addValue(){
    if (inputBox.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContiner.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {  // Check if the key pressed is "Enter"
                addValue();  // Trigger the addValue function
            }
        });

listContiner.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

 function saveData(){
    localStorage.setItem("data",listContiner.innerHTML);
 }

 function showvalues(){
    listContiner.innerHTML = localStorage.getItem("data")
 }
 showvalues();
