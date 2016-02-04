(function() {

  'use strict';

  angular
    .module('taxiTest')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://taxitest.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();
