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


      var loadItemTypes = function(){
            $scope.loading = true;
          serviceAjax.path("itemtypes").then(function(data){
                console.log("Poulet",data.data);

                $scope.types=data.data;


            });
          serviceAjax.path("associations").then(function(data){
                console.log("blbl", data.data);
                $scope.assos = data.data;
          });
        };


        loadItemTypes();
  });
