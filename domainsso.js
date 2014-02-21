jQuery(function(){
	if(Drupal.settings && Drupal.settings.domainsso && Drupal.settings.domainsso.domains){
		for(var i in Drupal.settings.domainsso.domains){
			var url = Drupal.settings.domainsso.domains[i];
			var ga = document.createElement('script'); 
			ga.type = 'text/javascript'; 
			ga.async = true;
			ga.src = url;
			var s = document.getElementsByTagName('script')[0]; 
			s.parentNode.insertBefore(ga, s);
		}
		
		var url = Drupal.settings.domainsso.curdomain;
		var ga = document.createElement('script'); 
		ga.type = 'text/javascript'; 
		ga.async = true;
		ga.src = url;
		var s = document.getElementsByTagName('script')[0]; 
		s.parentNode.insertBefore(ga, s);
	}
});