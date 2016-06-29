Template.createtask.events({
  'submit .new-task': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    //variables for taking values from the form
    var taskName = $('#task-name').val();
    var timeSelect1 = $('#time-select1').val();
    var timeSelect2 = $('#time-select2').val();
    var Priority = $('#priority').val();
    var Category = $('#category').val();
    

    // Insert a task into the collection
    Tasks.insert({
      taskName : taskName,
      timeinNumbers : timeSelect1,
      timeUnit : timeSelect2,
      Priority : Priority,
      Category : Category,
      createdAt: new Date() // current time
    });

    //Empty the fields in the end
    //$('#task-name').val() = " ";  
    //$('#time-select1').val() = " ";
 
    return false;//reloading stopped
    
  }
});