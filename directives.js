angular.module('directives', [])

.directive('aA', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'a.html'
	}
})

.directive('explanationPage', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'explanationPage.html'
	}
})

.directive('questionPage', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'questions.html'
	}
})