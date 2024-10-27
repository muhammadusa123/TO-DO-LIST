function addtask(){
 const newTask = document.createElement('li')// Set the text of the new task
 const taskList = document.getElementById('tasklist')
taskList.appendChild(newTask) // Add the new task to the list
newTask.textContent = document.getElementById('inputTask').value
inputTask.value = ""; // Clear the input field after adding the task
deleteTask(newTask)
}

function deleteTask(newTask) 
{
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete"
  newTask.appendChild(deleteBtn) 
   deleteBtn.onclick = function(){
    newTask.remove()
   }
}