FlowRouter.route('/',{
	action: function() {
		BlazeLayout.render('bodyTemplate', {
			get : 'home'
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