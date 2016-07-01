Template.yourList.helpers({
	tasks: function() {
		var userobj = Meteor.user();
   		var usernamevar = userobj.username;
		var usnamevar = Tasks.find({username:usernamevar});
		var x = usnamevar.fetch();
		return x;
	}
});