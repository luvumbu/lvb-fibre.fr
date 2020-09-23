var section = new Vue({
  el: '#section',
  data: {
		wifi_class:"display_none"
	},
  methods: {
    wifi:function(){
			document.getElementById("home").className="display_none";
			this.wifi_class="position_relative";			
		},
		video:function(){
			document.getElementById("home").style.display="none";
		},
		reseau:function(){
			document.getElementById("home").style.display="none";
		},
  }
})