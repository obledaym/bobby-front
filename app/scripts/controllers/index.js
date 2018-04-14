'use strict';

/**
 * @ngdoc function
 * @name bobbyApp.controller:IndexCtrl
 * @description
 * # indexCtrl
 * Controller of the bobbyApp
 */
angular.module('bobbyApp')
  .controller('indexCtrl', function ($scope, serviceAjax) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("here2");

    /*var loadBookings = function(){
            $scope.loading = true;
          serviceAjax.path("bookings").then(function(data){
                console.log("Poulet 2",data.data.data);


            });
        };


        loadBookings();*/
  });
