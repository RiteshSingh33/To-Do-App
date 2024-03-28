let item = document.querySelector("#add");
let priority = document.querySelector("#priority");
let parent = document.querySelector("#t1");
let todo = document.querySelector("#t1");

item.addEventListener(
    "keyup", function(e){
        if(e.key=== "Enter" && (this.value != "")){
            addToDo(this.value,priority.value)
            this.value = "";
        }
    }
);

let bt1 = document.querySelector("#id1");
bt1.addEventListener("click",()=>{
    if (item.value !== "") {
        addToDo(item.value, priority.value);
        item.value = "";
    }
});

let addToDo = (item,pr)=>{
    // Table Columns
    const tItem1 = document.createElement("td");
    tItem1.innerHTML = item;
    const tItem2 = document.createElement("td");
    tItem2.innerHTML = pr;
    const tItem3 = document.createElement("td");
    tItem3.innerHTML = "Pending";
    const tItem4 = document.createElement("td");

    // Buttons
    const b1 = document.createElement("button");
    const b2 = document.createElement("button");
    b1.innerHTML = "Complete";
    b2.innerHTML = "Delete";

    tItem4.appendChild(b1);
    b1.classList.add("btn");
    b1.classList.add("btn-success");
    b1.classList.add("p-1");

    tItem4.appendChild(b2);
    b2.classList.add("btn");
    b2.classList.add("btn-danger");
    b2.classList.add("p-1");

    // Table Row
    const tItem = document.createElement("tr");
    tItem.appendChild(tItem1);
    tItem.appendChild(tItem2);
    tItem.appendChild(tItem3);
    tItem.appendChild(tItem4);
    tItem.classList.add("hov");

    // Adding row to table
    parent.appendChild(tItem);
    b1.addEventListener("click",()=>{
        tItem3.innerHTML = "Completed";
    });

    // Deleting row from table
    b2.addEventListener("click",()=>{
        tItem.remove();
    })
}