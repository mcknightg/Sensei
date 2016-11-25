'use strict';

//  Sensei School Controller
catwalkApp.controller('SenseiSchoolController', ['$scope','$location','$stateParams','$global.services', 'SenseiSchool',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "School";
        $scope.listParams = {rows:12,page:1,defaultsearchoper:"icn"};
        $scope.srchterm = '';

        $scope.get = function(id){
            $scope.modelData = service.get({id: id});
        };
        $scope.setPage = function(page){
            $scope.listParams.page = page;
            $scope.list();
        };
        $scope.search = function(){
            if($scope.srchterm && $scope.srchterm !== '' ){
                $scope.listParams['filterByFields'] =  {'name':$scope.srchterm};
            }else{
                $scope.listParams['filterByFields'] = {};
            }
            $scope.list();
        };
        $scope.save = function(){
            service.save($scope.modelData,function(){
                  $scope.back();
            });
        };

        $scope.list = function(){
            $scope.modelList = service.query($scope.listParams);
        };

        $scope.remove = function(id){
            service.delete({id: id}, function () {

            });
        };

        $scope.new= function(){
            location.path('/sensei/school/');
        };

        $scope.update= function(id){
            location.path('/sensei/school/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Sensei School Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider','USER_ROLES',
    function ($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider
        .state('sensei.school', {
            url: "/school",
            templateUrl: "components/model/school/schoolTable.html",
            controller: 'SenseiSchoolController',
            access: {
                authorizedRoles: [USER_ROLES.all]
            }
        })
        .state('sensei.schoolForm', {
            url: "/school/:id",
            templateUrl: "components/model/school/schoolForm.html",
            controller: 'SenseiSchoolController',
            access: {
                authorizedRoles: [USER_ROLES.all]
            }
        })
     }
]);
