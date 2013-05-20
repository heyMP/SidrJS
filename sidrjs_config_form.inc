<?php

/*
 * Sidrjs Configuration Settings Form
 */

function sidrjs_config_form($form, &$form_state) {
	
	$form['sidrjs_target'] = array(
		'#type' => 'textfield',
		'#title' => t('Target'),
		'#default_value' => variable_get('sidrjs_target'),
		'#description' => t('Include the ID of the div the contains the navigation you want to render in the Sidr.js mobile navigation.'),
	);
	
	
	$form['sidrs_theme'] = array(
	    '#type' => 'radios',
	    '#title' => t('Theme'),
	    '#default_value' => variable_get('sidrjs_theme'),
	    '#options' => array(
			  'dark' => t('Dark'),
			  'light' => t('Light'), 
			  ),
	    '#description' => t('Select which style theme to use. NOT FUNCTIONAL YET'),
    );
   
	
	return (system_settings_form($form));
	
}
