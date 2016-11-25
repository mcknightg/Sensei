

catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('sensei', {
            abstract: false,
            url: "/sensei",
            templateUrl: "components/model/layout/sensei_layout.html"
        })

     }
]);
