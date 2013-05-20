(function ($) {
  Drupal.behaviors.sidrjs = {
    attach: function (context, settings) {
      
      //Set variables from the module
      var target = Drupal.settings.sidrjs.sidrjs_target;
      
      //Invoke Sidr
       $('#responsive-menu-button').sidr({
			name: 'sidr-main',
			//the source is the sidr_target variable
			//from the admin menu
			source: target
	   });
    }
  };
}(jQuery));