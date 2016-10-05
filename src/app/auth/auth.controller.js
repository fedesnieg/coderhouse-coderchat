(function() {
  'use strict';

  angular
    .module('coderChat')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController(firebaseData, $state) {
    var vm = this;

    vm.login = function() {
      firebaseData.login(vm.email, vm.password)
        .then(function() {
          $state.go('chat');
        }, function(error) {
          vm.error = error;
        });
    };

    vm.register = function() {
      firebaseData.register(vm.email, vm.password)
        .then(function() {
          vm.login();
        }, function(error) {
          vm.error = error;
        });
    };
  }
})();
