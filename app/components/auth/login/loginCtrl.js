(function (angular) {
	angular.module('sf.auth').controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['$state', 'AuthenticationService', 'FlashService'];

	function LoginCtrl($state, AuthenticationService, FlashService) {
		var vm = this;

		vm.login = login;

		(function initController() {
			AuthenticationService.ClearCredentials();
		})();

		function login() {
			vm.dataLoading = true;
			AuthenticationService.Login(vm.username, vm.password, function (response) {
				console.log(response.message);
				if (response.success) {
					AuthenticationService.SetCredentials(vm.username, vm.password);
					$state.go('secured.home');
				} else {
					FlashService.Error(response.message);
					vm.error = response.message;
					vm.dataLoading = false;
				}
			});
		}

	}
})(angular);