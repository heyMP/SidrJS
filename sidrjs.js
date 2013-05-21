(function ($) {
  Drupal.behaviors.sidrjs = {
    attach: function (context, settings) {
      
      //Set variables from the module
      var target = Drupal.settings.sidrjs.sidrjs_target;
      var menu_output = Drupal.settings.sidrjs.sidrjs_selected_menu_output;
      
      //Add the Responsive menu
      $('body').prepend('<div id="mobile-header"><a id="responsive-menu-button" href="#sidr-main">Menu</a></div>');
      
      //Invoke Sidr
       $('#responsive-menu-button').sidr({
			name: 'sidr-main',
			//the source is the sidr_target variable
			//from the admin menu
			source: menu_output
	   });
    }
  };
}(jQuery));