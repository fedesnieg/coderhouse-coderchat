(function() {
  'use strict';

  angular
    .module('coderChat')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state) {
  	$rootScope.$on('$stateChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $state.go('home');
      }
    });
  }

})();
