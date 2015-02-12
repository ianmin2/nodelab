(function () {

    var app = angular.module("toDO", ['ngRoute']);




    app.directive("topNav", ['$http', function ($http) {
        return {
            restrict: "E",
            templateUrl: "views/topnav.html",
            controller: function () {
                var tis = this;
                tis.el = {};
                $http.get("js/navbar.json").success(
                    function (data) {

                        tis.el = data;

                    });
            },
            controllerAs: "nav"
        }
    }]);


    app.directive("viewNotes", ['$http', function ($http) {
        return {
            restrict: "E",
            templateUrl: "views/viewnotes.html",
            controller: function () {

                this.notes = {};


            },
            controllerAs: "notes"
        }
    }]);


})();


/*

var myApp = angular.module('myApp', [ 'ngRoute', 'artistControllers' ] );

myApp.config( [ '$routeProvider', function( $routeProvider ){

    $routeProvider.when('/list', {

        templateUrl: 'partials/lists.html',
        controller: 'ListController'

    }).when('/details/:artistId',{ 

        templateUrl: 'partials/details.html',
        controller: 'DetailController' 

    }).otherwise({ 

        redirectTo: '/list'

    });

}]);

*/