FlowRouter.route('/your_list',{
	action: function() {
		BlazeLayout.render('bodyTemplate', {
			get : 'yourList'
		});
	}
});
FlowRouter.route('/createtask', {
  action: function() {
    BlazeLayout.render('bodyTemplate', {
    	get: 'createtask'
    });
  }
});
FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('bodyTemplate',{
			get: 'home'
		});
	}
});
FlowRouter.route('/register',{
	action: function() {
		BlazeLayout.render('bodyTemplate',{
			get: 'register'
		});
	} 
});
FlowRouter.route('/login',{
	action: function(){
		BlazeLayout.render('bodyTemplate',{
			get : "logIn"
		});
	}
});
FlowRouter.route('/githubapi',{
	action: function(){
		BlazeLayout.render('bodyTemplate',{
			get : "githubapi"
		});
	}
});
FlowRouter.route('/githubapi/issues',{
	action: function(){
		BlazeLayout.render('githubapi',{
			showissues: "issues"
		});
	}
});