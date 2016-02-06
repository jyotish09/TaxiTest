(function() {

  'use strict';

  angular
    .module('taxiTest')
    .factory('Bug', BugService);

  function BugService($firebaseAuth) {
    var ref = new Firebase("https://taxitest.firebaseio.com/bugs");
    return $firebaseAuth(ref);
  }

})();
