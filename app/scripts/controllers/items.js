'use strict';

/**
 * @ngdoc function
 * @name bobbyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bobbyApp
 */
angular.module('bobbyApp')
  .controller('ItemsCtrl', function ($scope, serviceAjax, $routeParams, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     var id = $routeParams.id;
     console.log(id);
    var loadAssociations = function(){

            $scope.loading = true;
          serviceAjax.path("associations").then(function(data){
                console.log("Poulet3",data.data);


            });
        };


        loadAssociations();
    /*var loadBookings = function(){
            $scope.loading = true;
          serviceAjax.path("bookings").then(function(data){
                console.log("Poulet 2",data.data.data);


            });
        };


        loadBookings();*/
  });
