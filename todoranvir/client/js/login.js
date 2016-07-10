Template.logIn.events({
	'click .login': function(event){
		event.preventDefault();
		var eMail = $("[name=e-mail]").val();
		var passWord = $('[name = password]').val();
		Meteor.loginWithPassword(eMail, passWord, function(error){
   		var err = error;	
   		if(err == undefined){// if there is no error in login then go to yourlist page.
			FlowRouter.go("/your_list");
		}else{
			alert("log in again");
		}
   		});
	}
});
