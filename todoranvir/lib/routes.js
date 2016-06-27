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
			get: 'taglines'
		});
	}
});