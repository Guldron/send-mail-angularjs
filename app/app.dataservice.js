(function(){

  'use strict';

dataservice.$inject = ['scope', 'Upload', 'timeout']; 

function dataservice($scope, Upload, $timeout) {

}

angular
    .module('app')
    .factory('dataservice', dataservice);
})();