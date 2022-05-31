let addtolistButton = document.getElementById ("addtolist");

let shoppingcontainer = document.getElementById("listContainer");

let inputfeild = document.getElementById("inputfield");


addtolistButton.addEventListener('click', function(){
        var li = document.createElement ('p')
        li.innerText = inputfeild.value;
        
        shoppingcontainer.appendChild(li);
        inputfeild.value ="";

        var deleteButton = document.createElement("button");
          deleteButton.textContent  = "x";
        li.appendChild(deleteButton)
        deleteButton.addEventListener("click", function () {
       console.log("Item removed");
       li.remove();
      }) 
    })
