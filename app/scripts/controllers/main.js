'use strict';

/**
 * @ngdoc function
 * @name bobbyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bobbyApp
 */
angular.module('bobbyApp')
  .controller('MainCtrl', function ($scope, serviceAjax) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("here");
    var loadAssociations = function(){
            $scope.loading = true;
          serviceAjax.path("associations").then(function(data){
                console.log("Poulet",data.data);


            });
        };


        loadAssociations();
        $scope.showItems = function(id) {
          $location.path('#/items/' + id);
        };
    /*var loadBookings = function(){
            $scope.loading = true;
          serviceAjax.path("bookings").then(function(data){
                console.log("Poulet 2",data.data.data);


            });
        };


        loadBookings();*/
  });
