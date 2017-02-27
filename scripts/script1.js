new Vue({
	el: '#events',
	data: {
		event: { 
			title : '',	description : '' 
		},	
		events: []	
	},	

	ready: function() {
		this.fetchEvents();
	},

	methods: {														
		fetchEvents: function() {
			var events = [];
			this.$set('events',events);
		},

		addEvent: function() {
			if(this.event.title){
				this.events.push(this.event);
				this.event = {title: '', description: ''};
			}
		},

		cancel: function() {
			this.event = {title: '', description: ''};
		},

		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index,1);        
			}
		},

		editEvent: function(index) {
			this.event = {title: ''+ this.events[index].title , description: ''+this.events[index].description};
			this.events.splice(index,1);
		}
	}
});