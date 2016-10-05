(function() {
  'use strict';

  angular
    .module('coderChat')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login.html',
        controller: 'AuthController',
        controllerAs: 'login'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'app/auth/register.html',
        controller: 'AuthController',
        controllerAs: 'register'
      })

      .state('chat', {
        url: '/chat',
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatController',
        controllerAs: 'chat',
        resolve: {
          user: function(firebaseData) {
              return firebaseData.requireSignIn();
            }
          }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
