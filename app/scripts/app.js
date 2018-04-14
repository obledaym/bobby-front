'use strict';

/**
 * @ngdoc overview
 * @name bobbyApp
 * @description
 * # bobbyApp
 *
 * Main module of the application.
 */
angular
  .module('bobbyApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
        .when('/items/:id', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl',
        controllerAs: 'items'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
