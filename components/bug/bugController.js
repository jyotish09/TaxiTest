(function(){
    'use strict';
    
    angular.module('taxiTest').controller('BugController',BugController);
    
    function BugController(Bug , $rootScope){
        
        var vm = this;
        
        vm.reportBug = reportBug;
        vm.bugData = Bug;
        
        function reportBug(){
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
                console.log("Report Added successfully to Firebase");
                window.location='index.html';
                vm.report = '';
            }
        }
    }
})();
