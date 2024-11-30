document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  let tasklist = document.getElementById("tasks");

  form.addEventListener("submit", function(event){
    event.preventDefault();
      
  
    const taskDescription = document.getElementById("new-task-description").value;
    //check if task description is not empty
    if (taskDescription.trim() !== "") {
      //Create a new <li> element for the task
       const taskItem = document.createElement("li");
       taskItem.textContent = taskDescription;
       tasklist.appendChild(taskItem);
       document.getElementById("new-task-description").value = "";

       // add click event listener to toggle strikethrough
       taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed-task");
       })
       //Create a new delete button
       const deleteButton = document.createElement("button");
       deleteButton.textContent = "delete";
       deleteButton.style.marginLeft = "30px"
       //add an event listener for the delete button
       deleteButton.addEventListener("click", () => {
        //remove the task when the delete buttton is clicked
        tasklist.removeChild(taskItem);
       });
       
       //append the delete button to the task item
       taskItem.appendChild(deleteButton)
       //append the taskitem to the task list
       tasklist.appendChild(taskItem);

       //clear the input field after adding the task
       document.getElementById("new-task-description").value = "";
   }
  });
});
