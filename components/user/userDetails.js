(function() {

	'use strict';

	angular
		.module('taxiTest')
		.factory('User', UserDetails);

	function UserDetails($firebaseObject) {

		function newUserRef(user) {
			var ref = new Firebase("https://taxitest.firebaseio.com/users/" + user.uid);
			return $firebaseObject(ref);
		}

		function getUserData(user) {
			var ref = new Firebase("https://taxitest.firebaseio.com/users/" + user);
			return $firebaseObject(ref);
		}

		function getLoggedInUser() {
			var user = localStorage.getItem('firebase:session::taxiTest');
			if(user) {
				return JSON.parse(user);
			}
		}

		return {
			newUserRef: newUserRef,
			getUserData: getUserData,
			getLoggedInUser: getLoggedInUser
		}
	}

})();
