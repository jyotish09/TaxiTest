(function() {

  'use strict';

  angular
    .module('taxiTest')
    .factory('Bug', BugService);

  function BugService($firebaseArray) {
    var refBug = new Firebase("https://taxitest.firebaseio.com/bugs");
    return $firebaseArray(refBug);
  }

})();
