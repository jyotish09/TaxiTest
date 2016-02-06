(function(){
    'use strict';
    
    angular.module('taxiTest').controller('BugController',BugController);
    
    function BugController($rootScope,Bug){
        
        var vm = this;
        
        vm.send = send;
        vm.bugData = Bug;
        
        function send(){
            if(vm.report){
                vm.bugData.$add({
                    //Adding the values to Firebase for now
                    datedate: Firebase.ServerValue.TIMESTAMP,
                    title: vm.title,
                    report:vm.report,
                    user :{
                        username: $rootScope.loggedInUserData.username,
                        email: $rootScope.loggedInUserData.email
                    }
                });
                
                vm.report = '';
            }
        }
    }
})();
