(function() {
  'use strict';

  angular
    .module('coderChat')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(firebaseData, $state) {
    var vm = this;

    vm.isLoggedIn = firebaseData.isLoggedIn();
    vm.goToChat = goToChat;
    vm.goToLogin = goToLogin;
    
    function goToChat() {
      $state.go("chat");
    }

    function goToLogin() {
      $state.go("login");
    }
  }
})();
