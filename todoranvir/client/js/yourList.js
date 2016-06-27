Template.yourList.helpers({
	tasks: function() {
		return Tasks.find();
	}
});