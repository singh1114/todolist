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
    var userobj = Meteor.user();
    var usernamevar = userobj.username;

    // Insert a task into the collection
    Tasks.insert({
      taskName : taskName,
      timeinNumbers : timeSelect1,
      timeUnit : timeSelect2,
      Priority : Priority,
      Category : Category,
      username : usernamevar,
      createdAt: new Date() // current time
    });
    alert("Task added");

    //Empty the fields in the end
    $('#task-name').val(' ');  
    $('#time-select1').val(' ');
    $("#time-select2").val(" ");
    $("#priority").val(" ");
    $("#category").val(" ");
 
    return false;//reloading stopped
    
  }
});
