(function() {
  'use strict';

  angular
    .module('coderChat')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController(firebaseData, $state) {
    var vm = this;

    vm.send = send;

    init();

    function init () {
      firebaseData.getMessages().then(function(data){
        vm.messages = data;
      });
    }

    function send () {
      firebaseData.addMessage({
        user: firebaseData.isLoggedIn().email,
        message: vm.text
      });

      vm.text = "";
    }
  }
})();
