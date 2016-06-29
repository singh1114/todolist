Template.login.events({
	'submit .login' : function(event){
		event.preventDefault();
		var eMail = $("[name=e-mail]").val();
		var passWord = $('[name = password]').val();
	}
})