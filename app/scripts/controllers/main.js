'use strict';

/**
 * @ngdoc function
 * @name folApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the folApp
 */
angular.module('folApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
