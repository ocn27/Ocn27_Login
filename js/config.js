require.config({

	baseUrl: './js',
	paths: {
		'OcnJs': 'OcnJs',
		'jquery': 'http://cdn.bootcss.com/jquery/1.11.1/jquery.min',
		'jquery.easings': 'jquery.easings.min',
		'jquery.slimscroll': 'jquery.slimscroll.min',
		'jquery.fullPage': 'jquery.fullPage.min'
	},
	shim: {
		'jquery.easings': {
			deps: ['jquery']
		},
		'jquery.slimscroll': {
			deps: ['jquery']
		},
		'jquery.fullPage': {
			deps: ['jquery', 'jquery.easings', 'jquery.slimscroll']
		}
	}
});

require(['jquery.fullPage', 'OcnJs'], function( fullPage, BaiduMap ){

	//FullPage
	$('#fullpage').fullpage({
        'css3': true,
        'sectionsColor': ['#000', '#1599A3'],
        anchors: ['page1', 'page2']
    })
	$.fn.fullpage.setAllowScrolling(false);
	$.fn.fullpage.keyboardScrolling(false);

	//Kill IE
	var isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome'),
	    isFireFox = window.navigator.userAgent.toLowerCase().indexOf('firefox');
	if ( isChrome < 0 && isFireFox < 0 ){
		$('#kill-ie-bg, #kill-ie').show();
	}
});
