Template.header.events({
	'click .signup': function(event) {
		event.preventDefault();
		FlowRouter.go("/register");
	},
	'click .login': function(event){
		event.preventDefault();
		FlowRouter.go("/login");
	}
});
