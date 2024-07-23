document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  let tasklist = document.getElementById("tasks");

  form.addEventListener("submit", function(event){
    event.preventDefault();
      
  
    const taskDescription = document.getElementById("new-task-description").value;
    if (taskDescription.trim() !== "") {
       const taskItem = document.createElement("li");
       taskItem.textContent = taskDescription;
       tasklist.appendChild(taskItem);


       document.getElementById("new-task-description").value = "";
   }
  });
});
