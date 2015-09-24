(function(){

  'use strict';

  function mailform(constants){

    function link($scope, $element, $attrs){

    };

    return {
    restrict:'EA',
    controller: 'mailformController',
    templateUrl: constants.mailform,
    link:link
    }   
  };


    angular
    .module('app')
    .directive('mailform',mailform)

})();