(function() {
	'use strict';

	//定义应用
	var app = angular.module('ngseed', [
		'ngCookies',
		'ngTouch',
		'ngResource',
		'ui.router',
		'toastr'
	]);

	//配置
	app.config(function($logProvider, toastrConfig) {
		'ngInject';

		// Enable log
		$logProvider.debugEnabled(true);

		// Set options third-party lib
		toastrConfig.allowHtml = true;
		toastrConfig.timeOut = 3000;
		toastrConfig.positionClass = 'toast-top-right';
		toastrConfig.preventDuplicates = true;
		toastrConfig.progressBar = true;
	});

	//启动
	app.run(function($log) {
		'ngInject';

		$log.debug('已经启动！');
	});

})();