'use strict';

/**
 * @ngdoc function
 * @name folApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the folApp
 */
angular.module('folApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
