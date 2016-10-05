(function() {
  'use strict';

  angular
    .module('coderChat')
    .factory('firebaseData', firebaseData);

  /** @ngInject */
  function firebaseData($firebaseArray, $firebaseAuth) {
    
    var root = firebase.database().ref();
    var messages = null;
    var firebaseAuthObject = $firebaseAuth();

    var service = {
      addMessage: addMessage,
      getMessages: getMessages,
      login: login,
      register: register,
      logout: logout,
      isLoggedIn: isLoggedIn,
      requireSignIn: requireSignIn
    };

    function register(email, pass) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(email, pass);
    }

    function login(user, pass) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user, pass);
    }

    function logout() {
      return firebaseAuthObject.$signOut();
    }
    
    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }

    function requireSignIn() {
      return firebaseAuthObject.$requireSignIn();
    }

    function getMessages() {
      if(!messages)
       messages = $firebaseArray(root.child('messages')).$loaded();
      
      return messages;
    } 

    function addMessage(msg) {
      $firebaseArray(root.child('messages')).$add(msg);
    } 

    return service;
  }
})();
