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
      }).when('/items/:id', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl',
        controllerAs: 'items'
      }).when('/add_item/:asso_id', {
        templateUrl: 'views/add_item.html',
        controller: 'AddItemCtrl',
        controllerAs: 'addItem'
      })
        .when('/validated_booking/:asso_id', {
        templateUrl: 'views/validated_booking.html',
        controller: 'ValidatedBookingCtrl',
        controllerAs: 'validatedBooking'
      })
        .when('/waiting_booking/:asso_id', {
        templateUrl: 'views/waiting_booking.html',
        controller: 'WaitingBookingCtrl',
        controllerAs: 'waitingBooking'
      })
        .when('/refused_booking/:asso_id', {
        templateUrl: 'views/refused_booking.html',
        controller: 'RefusedBookingCtrl',
        controllerAs: 'refusedBooking'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
