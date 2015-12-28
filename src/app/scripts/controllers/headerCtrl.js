(function() {
	'use strict';

	angular.module('ngseed')
		.controller('headerCtrl', function($scope, $location) {
			'ngInject';

			$scope.isActive = function(path) {
				return $location.path().match(path);
			}

		});

})();	