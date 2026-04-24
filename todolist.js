
const taskinput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const tasklist = document.querySelector(".task-list"); 

addbtn.addEventListener("click", () => {
  if (taskinput.value !== "") {
    const tasktext = taskinput.value;
    const listItem = document.createElement("li"); 

    listItem.innerHTML = `
      ${tasktext}
      <button class="delete-btn" style="background-color:red;margin-left:50px;">delete</button>
    `;

    tasklist.appendChild(listItem); 
    taskinput.value = "";
  }
});

tasklist.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) { 
    const listItem = event.target.parentElement;
    tasklist.removeChild(listItem);
  }
});
                        

