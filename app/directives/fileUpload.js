angular.module('searchifyApp').directive('fileUpload', fileUpload);

fileUpload.$inject = ['$parse'];

function fileUpload($parse) {
	return {
		restrict: 'E',
		//replace: true,
		link: linkFunction,
		scope: false,
		controller: FileUploadCtrl,
		controllerAs: 'vm',
		templateUrl: 'directives/fileUpload.html'
	}

	function linkFunction(scope, el, att) {
		el.bind('change', function() {
			console.log('changed');
			console.log(el[0].files);
			//$parse(att.fileUpload).assign(scope,el[0].files)
			//scope.$apply();
		})
	}
}


FileUploadCtrl.$inject = ['$http'];

function FileUploadCtrl($http) {
	var vm = this;
	vm.upload = upload;
	vm.getFiles = getFiles;
	vm.addFile = addFile;
	vm.deleteFile = deleteFile;
	vm.jsonFiles = [];
	
	vm.getFiles();

	function upload() {
		console.log(vm.files);
		$http.post('endpoint', vm.files, { headers: { 'Content-Type': 'multipart/form-data' } })
			.success(function (data) {
				console.log(data);
			})
			.error(function (e) {
				console.log(e);
			})
	}
	
	function getFiles() {
		$http.get('files.json')
		.success(function(data) {
			vm.jsonFiles = data;
			console.log(vm.jsonFiles);
		})
		.error(function(e) {
			console.log(e);
		})
	}
	
	function addFile() {
		console.log();
		var file = {
			"lastModified": 1442322862251,
			"lastModifiedDate": "Tue Sep 15 2015 10:14:22 GMT-0300 (ART)",
			"name": "1111111.jpg",
			"size": 3333,
			"type": "image/jpeg"
		}
		vm.jsonFiles.files[vm.jsonFiles.length] = file;
	}
	
	function deleteFile() {
		vm.jsonFiles.files.file_6 = "";
		console.log(vm.jsonFiles.files);
	}
}