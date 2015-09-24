(function(){

  'use strict';

  function mailformController($scope, Upload, $timeout) {

	$scope.uploadFiles = function(files) {
	        $scope.files = files;
	        angular.forEach(files, function(file) {
	            if (file && !file.$error) {
	         		file.upload = Upload.upload({
	                  url: 'server/upload',
	                  file: file
	                });

	                file.upload.then(function (response) {
	                  $timeout(function () {
	                    file.result = response.data;
	                  });
	                }, function (response) {
	                  if (response.status > 0)
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                });

	                file.upload.progress(function (evt) {
	                  file.progress = Math.min(100, parseInt(100.0 * 
	                                           evt.loaded / evt.total));
	                });
	    		}   
	        });
	    }
	};


    angular
    .module('app')
    .controller('mailformController', mailformController)

})();