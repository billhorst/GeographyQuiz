angular.module('directives', [])

.directive('aA', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'a.html'

	}
})