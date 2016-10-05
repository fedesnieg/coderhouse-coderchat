(function() {
  'use strict';

  angular
    .module('coderChat')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, firebaseData, $state) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.isLoggedIn = firebaseData.isLoggedIn();

      vm.logout = logout;

      function logout() {
        firebaseData.logout().then(function() {
          $state.reload();
        });
      }
    }
  }

})();
