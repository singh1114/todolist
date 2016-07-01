Template.createRow.events({
	'click .remove' : function(event) {
		event.preventDefault();
		Tasks.remove(this._id);
	},
	'click .time-start': function(event) {
		event.preventDefault();
		var taskobj = Tasks.findOne({_id:this._id});
		var timevar = taskobj.timeinNumbers;
		function aftertime(timevar){
			if(timevar>0){
			alert(timevar + " Minutes remaining");
			timevar--;
			return timevar;
			}
			else{
				clearInterval(tostopit);
				document.write("Time is up");
			}
		}
		timevar = aftertime(timevar);
		var milmin = parseInt(2*1000);
		var tostopit = setInterval(function(){timevar = aftertime(timevar);},milmin);
	}
});
