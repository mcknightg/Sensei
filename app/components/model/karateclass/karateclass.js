'use strict';

//  Sensei Karateclass Controller
catwalkApp.controller('SenseiKarateclassController', ['$scope','$location','$stateParams','$global.services', 'SenseiKarateclass',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Karateclass";
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
            location.path('/sensei/karateclass/');
        };

        $scope.update= function(id){
            location.path('/sensei/karateclass/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Sensei Karateclass Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider','USER_ROLES',
    function ($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider
        .state('sensei.karateclass', {
            url: "/karateclass",
            templateUrl: "components/model/karateclass/karateclassTable.html",
            controller: 'SenseiKarateclassController',
            access: {
                authorizedRoles: [USER_ROLES.all]
            }
        })
        .state('sensei.karateclassForm', {
            url: "/karateclass/:id",
            templateUrl: "components/model/karateclass/karateclassForm.html",
            controller: 'SenseiKarateclassController',
            access: {
                authorizedRoles: [USER_ROLES.all]
            }
        })
     }
]);
