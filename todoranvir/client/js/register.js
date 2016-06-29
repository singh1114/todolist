Template.register.events({
	'click .register' : function(event){
		event.preventDefault();
		var userName = $('[name = user-name]').val();
		var eMail = $('[name = e-mail]').val();
		var passWord = $('[name = password]').val();
		Accounts.createUser({
			username : userName,
			email : eMail,
			password : passWord
		});
		FlowRouter.go("/createtask");
	}
});